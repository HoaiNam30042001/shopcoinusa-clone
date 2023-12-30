import * as mongoose from 'mongoose';

export const CoinSchema = new mongoose.Schema({
    logo: String,
    name: String,
    symbol: String,
    price: Number,
    type: String,
    fullName: String,
    private: Boolean,
    unshow: String,
    low: Number,
    hight: Number,
});