export type DEPOSIT_TYPE = {
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
    statement: string;
    bank_admin: any;
    note: string;
    createAt: Date;
    updatedAt: Date;
};

export enum Deposit_Type_Status {
    'COMPLETED' = 'Completed',
    'PENDING' = 'Pending',
    'CANCEL' = 'Canceled'
}