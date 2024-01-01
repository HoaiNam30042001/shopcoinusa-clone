import { Module } from '@nestjs/common';
import { WithdrawController } from './withdraw.controller';
import { WithdrawProvider } from './wihtdraw.providers';
import { DatabaseModule } from 'src/database/database.module';
import { WithdrawService } from './withdraw.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WithdrawController],
  providers: [
    WithdrawService,
    ...WithdrawProvider,
  ],
})
export class WithdrawModule {}