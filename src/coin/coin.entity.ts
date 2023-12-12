import { BaseEntity } from "src/common/base.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity({ name: "coin" })
export class CoinEntity extends BaseEntity {
  @Column({
    nullable: true,
    length: 100,
  })
  logo: string;

  @Column({
    nullable: true,
    length: 100,
  })
  name: string;

  @Column({
    nullable: true,
    length: 100,
  })
  symbol: string;

  @Column({
    nullable: true,
  })
  price: number;

  @Column({
    nullable: true,
    length: 100,
  })
  type: string;

  @Column({
    nullable: true,
    length: 100,
  })
  fullName: string;
  @Column({
    nullable: true,
  })
  private: boolean;

  @Column({
    nullable: true,
    length: 100,
  })
  unshow: string;

  @Column({
    nullable: true,
    length: 100,
  })
  low: number;

  @Column({
    nullable: true,
    length: 100,
  })
  hight: number;
}
