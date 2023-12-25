import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users' })  
  async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, description: 'Return user' })  
  async getUserById(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }
}
