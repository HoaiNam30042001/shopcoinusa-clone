import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoinModule } from "./coin/coin.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoinEntity } from "./coin/coin.entity";

@Module({
  imports: [
    CoinModule,
    TypeOrmModule.forRoot({
      entities: [CoinEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
