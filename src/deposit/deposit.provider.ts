import { Connection } from 'mongoose';
import { DepositSchema } from './deposit.schema';

export const DepositProvider = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Deposit', DepositSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];