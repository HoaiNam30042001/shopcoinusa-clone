import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import userSchema from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], 
})
export class UserModule {}
