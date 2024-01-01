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
import { WithdrawService } from "./withdraw.service";

@ApiTags("Withdraw")
@Controller("withdraw")
export class WithdrawController {
}
