import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refreshtoken.dto';

@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register' })
  async register(@Body(ValidationPipe) userData: RegisterDto) {
    try {
      const result = await this.authService.registerUser(userData);
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }


  @Post('login')
  @ApiOperation({ summary: 'Login' })
  async login(@Body(ValidationPipe) loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('refresh')
  @ApiOperation({ summary: 'Refresh token' })
  async refreshToken(@Body() refreshDto: RefreshTokenDto) {
    const { refreshToken } = refreshDto;

    // Kiểm tra tính hợp lệ của refresh token
    const isValid = await this.authService.validateRefreshToken(refreshToken);

    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Lấy thông tin user từ refresh token và tạo access token mới
    const newAccessToken = await this.authService.refreshAccessToken(refreshToken);

    return { accessToken: newAccessToken };
  }
}
