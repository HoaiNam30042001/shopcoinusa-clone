import * as mongoose from 'mongoose';

export const WithdrawSchema = new mongoose.Schema(
    {
    status: { type: String, default: 'Pending', index: true },
        code: { type: String, default: '' },
        amount: { type: Number, default: 0 },
        user: { type: String, default: '', index: true },
        create_by: { type: String, default: '', index: true },
        method: {
            type: mongoose.Types.ObjectId,
            default: null,
            ref: 'payment',
            index: true
        },
        amount_usd: { type: Number, default: 0.0 },
        amount_vnd: { type: Number, default: 0.0 },
        symbol: { type: String, default: 'USDT' },
        note: { type: String, default: '' }
    },
    { timestamps: true, collection: 'withdraws' }
);