import { Connection } from 'mongoose';
import { CoinSchema } from './coin.schema';

export const CoinProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Coin', CoinSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];