import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserInterface } from "./user.entity";
import { Model } from "mongoose";
import { RegisterDto } from "src/auth/dto/register.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model< Document & UserInterface>) {}

  async getAllUsers(): Promise<UserInterface[]> {
    return this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<UserInterface> {
    return this.userModel.findById(userId).exec();
  }
  async createUser(userData: RegisterDto): Promise<UserInterface> {
    try {
      const existingUser = await this.userModel.findOne({ 'payment.email': userData.email }).exec();
      
      if (existingUser) {
        throw new Error('Email is already in use');
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);

      const newUser = new this.userModel({
        payment: {
          email: userData.email,
          username: userData.username,
          password: hashedPassword,
        },
        // other default values
      });

      return newUser.save();
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async findOneByEmail(email: string): Promise<UserInterface> {
    return this.userModel.findOne({ 'payment.email': email }).exec();
  }
}