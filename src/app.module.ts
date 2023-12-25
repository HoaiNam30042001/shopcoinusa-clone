import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(''), //Link localhost cua MongoDb
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
