import { Module } from '@nestjs/common';
import { WithdrawController } from './withdraw.controller';
import { WithdrawProviders } from './wihtdraw.providers';
import { DatabaseModule } from 'src/database/database.module';
import { WithdrawService } from './withdraw.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WithdrawController],
  providers: [
    WithdrawService,
    ...WithdrawProviders,
  ],
})
export class CoinModule {}