import { ICoin } from "./coin.interface";
import { Injectable } from "@nestjs/common";
import { CoinEntity } from "./coin.entity";
import { DataSource, Repository } from "typeorm";
@Injectable()
export class CoinService implements ICoin {
  constructor(
    private readonly coinRepository: Repository<CoinEntity>,
    private dataSource: DataSource
  ) {}
  async create(data: any): Promise<any> {
    try {
      const coinEntity = this.coinRepository.create(data);
      await this.coinRepository.save(coinEntity);
      return coinEntity;
    } catch (error) {
      throw error;
    }
  }
  async update(id: string, data: any): Promise<any> {
    try {
      return await this.coinRepository.update(id, data);
    } catch (error) {
      throw error;
    }
  }
  async findById(id: string): Promise<CoinEntity> {
    try {
      return await this.coinRepository.findOne({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
  async findAll(): Promise<CoinEntity[]> {
    try {
      return await this.coinRepository.find();
    } catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<any> {
    try {
      const coinEntity = await this.coinRepository.findOne({ where: { id } });
      return await this.coinRepository.remove(coinEntity);
    } catch (error) {
      throw error;
    }
  }
}
