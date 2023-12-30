import { Withdraw } from "./withdraw.interface";
import { Injectable, Inject, BadRequestException } from "@nestjs/common";

import { Model } from 'mongoose';
import { WITHDRAW_TYPE, Withdraw_Type_Status } from "./withdraw.type";

@Injectable()
export class WithdrawService {
  constructor(
    @Inject('WITHDRAW_MODEL')
    private withdrawModel: Model<Withdraw>,
  ) { }
  async create(data: any): Promise<any> {
    return await this.withdrawModel.create(data);
}
async update(id: any, data: any): Promise<any> {
    await this.withdrawModel.findByIdAndUpdate(id, { $set: data }).lean();
    return 'Update successfully for withdraw with id = ' + id;
}
async delete(id: any): Promise<any> {
    await this.withdrawModel.findByIdAndDelete(id).lean();
    return `Delete withdraw successfully with id = ${id}`;
}
async findById(id: any): Promise<any> {
    return await this.withdrawModel.findById(id).lean();
}
async findAll(): Promise<any> {
    return await this.withdrawModel
        .find()
        .populate('method', 'method_name account_name')
        .sort({ createdAt: 'desc' })
        .lean();
}

findAllByEmail = async (email: string) => {
    const withdraws = await this.withdrawModel.find({ user: email });
    return withdraws;
};

deleteManyByEmail = async (email: string) => {
    await this.withdrawModel.deleteMany({ user: email });
    return 'OK Deleted Withdraw successfully';
};

pagingWithdraw = async (page = 1, show = 10) => {
    const start = (page - 1) * show;
    const end = page * show;

    const withdraws: Array<any> = await this.withdrawModel
        .find()
        .populate('method', 'method_name account_name')
        .sort({ createdAt: 'desc' })
        .lean();
    const result = withdraws.slice(start, end);
    return result;
};

pagingWithdrawSearch = async (page = 1, show = 10, search = '') => {
    if (!search) {
        const withdraws = await this.pagingWithdraw(page, show);
        return withdraws;
    } else {
        const withdraws = await this.findAll();
        const filtered = withdraws.filter(
            (withdraw: WITHDRAW_TYPE) =>
                withdraw.user.toLowerCase().includes(search) ||
                withdraw.status.toLowerCase().includes(search)
        );
        const start = (page - 1) * show;
        const end = page * show;
        const result = filtered.slice(start, end);
        return result;
    }
};

handle_withdraw = async (idWithdraw: string, status = 'Completed') => {
    const withdraw: WITHDRAW_TYPE = await this.findById(idWithdraw);
    const user: any = await userServices.find_user_by_email(withdraw.user);

    if (!withdraw) throw new BadRequestException(`Withdraw is not valid`);
    if (!user) throw new BadRequestException(`User is not valid`);

    if (status === Withdraw_Type_Status.COMPLETED) {
        if (withdraw.status !== Withdraw_Type_Status.CONFIRMED) {
            throw new BadRequestException(
                `If you want ${Withdraw_Type_Status.COMPLETED} this. Please ${Withdraw_Type_Status.CONFIRMED}`
            );
        }

        await this.update(idWithdraw, {
            status: Withdraw_Type_Status.COMPLETED
        });
        sendQueue(
            JSON.stringify({
                type: 'send_mail_withdraw',
                data: {
                    email: user.payment.email,
                    username: user.payment.username,
                    quantity: withdraw.amount
                }
            })
        );
        return `${status} withdraw successfully`;
    } else if (status === Withdraw_Type_Status.CANCEL) {
        if (withdraw.status === Withdraw_Type_Status.PENDING) {
            await this.update(idWithdraw, {
                status: Withdraw_Type_Status.CANCEL
            });
            return `${status} withdraw successfully`;
        } else if (withdraw.status === Withdraw_Type_Status.CONFIRMED) {
            const new_balance = user.Wallet.balance + withdraw.amount;
            const new_withdraw = user.Wallet.withdraw - withdraw.amount;

            if (new_balance < 0) {
                throw new BadRequestException(
                    `Own balance is not enough for withdraw money`
                );
            }

            await this.update(idWithdraw, {
                status: Withdraw_Type_Status.CANCEL
            });

            await userServices.update(user._id, {
                'Wallet.balance': new_balance,
                'Wallet.withdraw': new_withdraw
            });
            return `${status} withdraw successfully`;
        } else if (withdraw.status === Withdraw_Type_Status.COMPLETED) {
            const new_balance = user.Wallet.balance + withdraw.amount;
            const new_withdraw = user.Wallet.withdraw - withdraw.amount;

            if (new_balance < 0) {
                throw new BadRequestException(
                    `Own balance is not enough for withdraw money`
                );
            }

            await this.update(idWithdraw, {
                status: Withdraw_Type_Status.CANCEL
            });

            await userServices.update(user._id, {
                'Wallet.balance': new_balance,
                'Wallet.withdraw': new_withdraw
            });
            return `${status} withdraw successfully`;
        }
        throw new BadRequestException(
            `If you want ${Withdraw_Type_Status.CANCEL} this. Please ${Withdraw_Type_Status.CONFIRMED} or ${Withdraw_Type_Status.PENDING} or ${Withdraw_Type_Status.COMPLETED}`
        );
    } else if (status === Withdraw_Type_Status.CONFIRMED) {
        if (withdraw.status !== Withdraw_Type_Status.PENDING) {
            throw new BadRequestException(
                `if you want ${Withdraw_Type_Status.CONFIRMED}. Please ${Withdraw_Type_Status.PENDING}`
            );
        }
        const new_balance = user.Wallet.balance - withdraw.amount;
        const new_withdraw = user.Wallet.withdraw + withdraw.amount;

        if (new_balance < 0) {
            throw new BadRequestException(
                `Own balance is not enough for withdraw money`
            );
        }

        await this.update(idWithdraw, {
            status: Withdraw_Type_Status.CONFIRMED
        });

        await userServices.update(user._id, {
            'Wallet.balance': new_balance,
            'Wallet.withdraw': new_withdraw
        });
        return `${status} withdraw successfully`;
    } else if (status === Withdraw_Type_Status.PENDING) {
        if (withdraw.status !== Withdraw_Type_Status.CANCEL) {
            throw new BadRequestException(
                `if you want ${Withdraw_Type_Status.PENDING}. Please ${Withdraw_Type_Status.CANCEL}`
            );
        }
        await this.update(idWithdraw, {
            status: Withdraw_Type_Status.PENDING
        });
        return `${status} withdraw successfully`;
    } else {
        throw new BadRequestException(`${status} is not support`);
    }
};
}
