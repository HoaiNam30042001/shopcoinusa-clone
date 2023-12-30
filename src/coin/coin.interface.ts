import { Document } from 'mongoose';

export interface Coin extends Document {
  readonly logo: string,
  readonly name: string,
  readonly symbol: string,
  readonly price: number,
  readonly type: string,
  readonly fullName: string,
  readonly private: boolean,
  readonly unshow: string,
  readonly low: number,
  readonly hight: number,
}


