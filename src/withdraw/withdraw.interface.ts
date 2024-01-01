import { Document } from 'mongoose';

export interface IWithdraw extends Document {
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
}


