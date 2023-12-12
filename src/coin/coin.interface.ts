import { CoinEntity } from "./coin.entity";

export interface ICoin {
  create(data: any): Promise<any>;
  update(id: string, data: any): Promise<any>;
  findById(id: string): Promise<CoinEntity>;
  findAll(): Promise<CoinEntity[]>;
  delete(id: string): Promise<any>;
}
