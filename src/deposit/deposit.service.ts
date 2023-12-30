import { Deposit } from "./deposit.interface";
import { Injectable, Inject, BadRequestException } from "@nestjs/common";

import { Model } from 'mongoose';
import { DEPOSIT_TYPE, Deposit_Type_Status } from "./deposit.type";
@Injectable()
export class DepositService {
  constructor(
    @Inject('DEPOSIT_MODEL')
    private depositModel: Model<Deposit>,
  ) { }
  async create(data: any): Promise<any> {
    try {
      const createdCoin = new this.depositModel(data);
      await createdCoin.populate('method', 'method_name account_name number');
      return await createdCoin.save();
    } catch (error) {
      throw error;
    }
  }
  async update(id: string, data: any): Promise<any> {
    try {
      await this.depositModel
        .findByIdAndUpdate(id, { $set: data })
        .lean()
      return 'Update successfully for deposit with id = ' + id
    } catch (error) {
      throw error;
    }
  }
  async findById(id: string): Promise<any> {
    try {
      return await this.depositModel.findById(id).populate('method', 'method_name account_name number').lean()
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<any[]> {
    try {
      return await this.depositModel
        .find()
        .populate('method', 'method_name account_name number')
        .sort({ createdAt: 'desc' })
        .lean();
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<any> {
    try {
      await this.depositModel
        .findByIdAndDelete(id)
        .lean()
      return `Delete deposit successfully with id = ${id}`

    } catch (error) {
      throw error;
    }
  }

  deleteManyByUser = async (email: string) => {
    try {
      await this.depositModel.deleteMany({ user: email }).lean();
      return 'Delete successfully deposits';
    } catch (error) {
      throw error;
    }
  };

  async findAllByEmail(email: string): Promise<any> {
    return await this.depositModel.find({ user: email }).populate('method', 'method_name account_name number').lean()
  }

  pagingDeposit = async (page = 1, show = 10) => {
    const start = (page - 1) * show;
    const end = page * show;

    const deposits: Array<any> = await this.depositModel
      .find()
      .populate('method', 'method_name account_name number')
      .sort({ createdAt: 'desc' })
      .lean();
    const result = deposits.slice(start, end);
    return result;
  };

  pagingDepositSearch = async (page = 1, show = 10, search = '') => {
    if (!search) {
      const deposits = await this.pagingDeposit(page, show);
      return deposits;
    } else {
      const deposits = await this.findAll();
      const filtered = deposits.filter(
        (deposit: DEPOSIT_TYPE) =>
          deposit.user.toLowerCase().includes(search) ||
          deposit.status.toLowerCase().includes(search)
      );
      const start = (page - 1) * show;
      const end = page * show;
      const result = filtered.slice(start, end);
      return result;
    }
  };

  handle_deposit = async (idDeposit: string, status = 'Completed') => {
    const deposit: DEPOSIT_TYPE = await this.findById(idDeposit);
    const user: any = await userServices.find_user_by_email(deposit.user);
    if (!deposit) throw new BadRequestException(`Deposit is not exist`);
    if (!user) throw new BadRequestException(`User is not valid`);

    if (status === Deposit_Type_Status.COMPLETED) {
      if (deposit.status !== Deposit_Type_Status.PENDING) {
        throw new BadRequestException(
          `If you want to ${status}. Please pending this or this status is ${Deposit_Type_Status.COMPLETED}`
        );
      }
      const new_balance = user.Wallet.balance + deposit.amount;
      const new_deposit = user.Wallet.deposit + deposit.amount;

      await this.update(idDeposit, {
        status: 'Completed'
      });

      await userServices.update(user._id, {
        'Wallet.balance': new_balance,
        'Wallet.deposit': new_deposit
      });
      sendQueue(
        JSON.stringify({
          data: {
            email: user.payment.email,
            username: user.payment.username,
            quantity: deposit.amount
          },
          type: 'send_mail_deposit'
        })
      );
      return `${status} deposit successfully`;
    } else if (status === Deposit_Type_Status.CANCEL) {
      if (deposit.status === Deposit_Type_Status.PENDING || deposit.status === 'On holdk') {
        await this.update(idDeposit, {
          status: Deposit_Type_Status.CANCEL
        });
        return `${status} deposit successfully`;
      } else if (deposit.status === Deposit_Type_Status.COMPLETED) {
        const new_balance = user.Wallet.balance - deposit.amount;
        const new_deposit = user.Wallet.deposit - deposit.amount;

        if (new_balance < 0) {
          throw new BadRequestException(
            `Own balance is not enough for ${status}`
          );
        }

        await this.update(idDeposit, {
          status: Deposit_Type_Status.CANCEL
        });

        await userServices.update(user._id, {
          'Wallet.balance': new_balance,
          'Wallet.deposit': new_deposit
        });
        return `${status} deposit successfully`;
      } else {
        throw new BadRequestException(
          `If you want to ${status}. Please ${Deposit_Type_Status.PENDING} or ${Deposit_Type_Status.COMPLETED} this`
        );
      }
    } else if (status === Deposit_Type_Status.PENDING) {
      if (deposit.status !== Deposit_Type_Status.CANCEL) {
        throw new BadRequestException(
          `If you want to ${status}. Please pending this`
        );
      }
      await this.update(idDeposit, {
        status: Deposit_Type_Status.PENDING
      });
      return `${status} deposit successfully`;
    } else {
      throw new BadRequestException(`${status} is not valid for Deposit`);
    }
  };
}
