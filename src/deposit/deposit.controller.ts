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

@ApiTags("Deposit")
@Controller("deposit")
export class DepositController {
}
