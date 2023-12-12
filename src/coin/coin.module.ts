import { Module } from "@nestjs/common";
import { CoinService } from "./coin.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoinEntity } from "./coin.entity";
import { CoinController } from "./coin.controller";
@Module({
  imports: [TypeOrmModule.forFeature([CoinEntity])], // Thêm TypeOrmModule.forFeature cho TopUpEntity
  providers: [CoinService],
  controllers: [CoinController],
  exports: [TypeOrmModule.forFeature([CoinEntity])], // Cũng cần thêm vào exports nếu bạn muốn xuất repository
})
export class CoinModule {}
