import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserInterface } from "./user.entity";
import { Model } from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserInterface>) {}

  async getAllUsers(): Promise<UserInterface[]> {
    return this.userModel.find().exec();
  }

  async getUserById(userId: string): Promise<UserInterface> {
    return this.userModel.findById(userId).exec();
  }
}