import { Module } from '@nestjs/common';
import { DepositController } from './deposit.controller';
import { DepositProvider } from './deposit.provider';
import { DatabaseModule } from 'src/database/database.module';
import { DepositService } from './deposit.service';

@Module({
  imports: [DatabaseModule],
  controllers: [DepositController],
  providers: [
    DepositService,
    ...DepositProvider,
  ],
})
export class DepositModule {}