import { Schema, Types } from 'mongoose';

type coin = {
    amount: number;
    symbol: string;
};

export interface UserInterface {
    Wallet: {
        balance: number;
        deposit: number;
        withdraw: number;
        pending: number;
        commission: number;
    };
    payment: {
        bank?: any;
        private: boolean;
        rule: string;
        email: string;
        password: string;
        username: string;
    };
    coins?: Array<coin>;
    rank: string;
    changeBalance: number;
    fee: number;
    uploadCCCDFont: string;
    uploadCCCDBeside: string;
    uploadLicenseFont: string;
    uploadLicenseBeside: string;
    lock: boolean;
    activated: boolean;
}

const user = new Schema<UserInterface>(
    {
        Wallet: {
            balance: { type: Number, default: 0.0 },
            deposit: { type: Number, default: 0.0 },
            withdraw: { type: Number, default: 0.0 },
            pending: { type: Number, default: 0.0 },
            commission: { type: Number, default: 0 }
        },
        payment: {
            bank: { type: Types.ObjectId, default: null, ref: 'payment' },
            rule: {
                type: String,
                enum: ['user', 'manager', 'admin'],
                default: 'user'
            },
            email: { type: String, default: '', index: true },
            password: { type: String, default: '', index: true },
            username: { type: String, default: '', index: true }
        },
        coins: {
            type: [
                {
                    amount: { type: Number, default: 0.0 },
                    symbol: { type: String, default: '' }
                }
            ],
            default: []
        },
        rank: {
            type: String,
            enum: ['STANDARD', 'VIP', 'PRO', 'DEMO'],
            default: 'STANDARD'
        },
        changeBalance: { type: Number, default: 0.0 },
        fee: { type: Number, default: 0.0015 },
        uploadCCCDFont: { type: String, default: '' },
        uploadCCCDBeside: { type: String, default: '' },
        uploadLicenseFont: { type: String, default: '' },
        uploadLicenseBeside: { type: String, default: '' },
        lock: { type: Boolean, default: false },
        activated: { type: Boolean, default: false }
    },
    { collection: 'users', timestamps: true }
);

export default user;