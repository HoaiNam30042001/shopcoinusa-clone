export type WITHDRAW_TYPE = {
    _id: any;
    status: string;
    code: string;
    amount: number;
    user: string;
    create_by: string;
    method: any;
    amount_usd: number;
    amount_vnd: number;
    symbol: string;
    note: string;
    createAt: Date;
    updatedAt: Date;
};

export enum Withdraw_Type_Status {
    'CONFIRMED' = 'Confirmed',
    'COMPLETED' = 'Completed',
    'PENDING' = 'Pending',
    'CANCEL' = 'Canceled'
}