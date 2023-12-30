import { Coin } from "./coin.interface";
import { Injectable, Inject } from "@nestjs/common";

import { Model } from 'mongoose';
@Injectable()
export class CoinService {
  constructor(
    @Inject('COIN_MODEL')
    private coinModel: Model<Coin>,
  ) {}
  async create(data: any): Promise<Coin> {
    try {
      const createdCoin = new this.coinModel(data);
      return createdCoin.save();
    } catch (error) {
      throw error;
    }
  }
  async update(id: string, data: any): Promise<any> {
    try {
      return await this.coinModel.findByIdAndUpdate(id, data)
    } catch (error) {
      throw error;
    }
  }
  async findById(id: string): Promise<any> {
    try {
      return await this.coinModel.findById(id);
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<any[]> {
    try {
      return await this.coinModel.find();
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<any> {
    try {
      return await this.coinModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}
