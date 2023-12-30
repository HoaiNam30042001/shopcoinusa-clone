import { Module } from '@nestjs/common';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';
import { CoinProviders } from './coin.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CoinController],
  providers: [
    CoinService,
    ...CoinProviders,
  ],
})
export class CoinModule {}