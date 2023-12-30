import { Connection } from 'mongoose';
import { WithdrawSchema } from './withdraw.schema';

export const WithdrawProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Withdraw', WithdrawSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];