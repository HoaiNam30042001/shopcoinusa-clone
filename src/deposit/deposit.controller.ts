import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Get,
  Delete,
} from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { DepositService } from "./deposit.service";
import { CoinDto } from "./coin.dto";

@ApiTags("Coin")
@Controller("coin")
export class DepositController {
  // constructor(private readonly coinService: CoinService) {}

  // @Post()
  // @ApiBody({ type: CoinDto })
  // async create(@Body() data: CoinDto): Promise<any> {
  //   return await this.coinService.create(data);
  // }

  // @Put(":id")
  // @ApiBody({ type: CoinDto })
  // @ApiParam({ name: "id" })
  // async update(@Body() data: CoinDto, @Param() id: string): Promise<any> {
  //   return await this.coinService.update(id, data);
  // }

  // @Get("id")
  // @ApiParam({ name: "id" })
  // async findById(@Param() id: string): Promise<any> {
  //   return await this.coinService.findById(id);
  // }

  // @Get()
  // async findAll(): Promise<any> {
  //   return await this.coinService.findAll();
  // }

  // @Delete(":id")
  // @ApiParam({ name: "id" })
  // async delete(@Param() id: string): Promise<any> {
  //   return await this.coinService.delete(id);
  // }
}
