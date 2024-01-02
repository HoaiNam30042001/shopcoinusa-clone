import { Connection } from 'mongoose';
import { WithdrawSchema } from './withdraw.schema';

export const WithdrawProvider = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Withdraw', WithdrawSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];