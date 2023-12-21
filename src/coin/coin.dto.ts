import { ApiProperty } from "@nestjs/swagger";

export class CoinDto {
  @ApiProperty()
  logo: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  private: boolean;

  @ApiProperty()
  unshow: string;

  @ApiProperty()
  low: number;

  @ApiProperty()
  hight: number;
}
