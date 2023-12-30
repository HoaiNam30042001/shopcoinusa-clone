import { Document } from 'mongoose';

export interface Deposit extends Document {
  status: string,
  amount: number,
  user: string,
  method: string, //id payment
  amount_usd: string,
  amount_vnd: string,
  symbol: string,
  statement: string,
  create_by: string,
  note: string,
}


