import * as mongoose from 'mongoose';

export const DepositSchema = new mongoose.Schema({
    status: String,
    amount: Number,
    user: String,
    method: String, //id payment
    amount_usd: String,
    amount_vnd: String,
    symbol: String,
    statement: String,
    create_by: String,
    note: String,
});