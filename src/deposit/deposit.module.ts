import { Module } from '@nestjs/common';
import { DepositController } from './deposit.controller';
import { DepositProviders } from './deposit.providers';
import { DatabaseModule } from 'src/database/database.module';
import { DepositService } from './deposit.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DepositController],
  providers: [
    DepositService,
    ...DepositProviders,
  ],
})
export class CoinModule {}