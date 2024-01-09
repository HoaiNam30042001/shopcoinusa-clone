import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from 'src/utils/constants';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        ) {}

  async registerUser(userData: RegisterDto): Promise<any> {
    try {

      const newUser = await this.userService.createUser(userData);

      return { message: 'User registered successfully', user: newUser };
    } catch (error) {
      throw new Error('Failed to register user');
    }
  }

  async login(loginDto: LoginDto): Promise<any> {
    const user = await this.userService.findOneByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, (user as any).payment.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.jwtService.signAsync({ sub: (user as any)._id }, {
        secret: jwtConstants.secret,
    });

    // You can customize the payload and options as needed
    const refreshToken = await this.jwtService.signAsync({ sub: (user as any)._id }, {
        secret: jwtConstants.secret,
    });

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async validateRefreshToken(refreshToken: string): Promise<boolean> {
    try {
      // Kiểm tra refresh token có hợp lệ hay không
      const decoded = this.jwtService.verify(refreshToken);
      return !!decoded;
    } catch (error) {
      return false;
    }
  }

  async refreshAccessToken(refreshToken: string): Promise<string> {
    try {
      // Lấy thông tin user từ refresh token
      const decoded = this.jwtService.verify(refreshToken);
      const userId = decoded.sub;

      // Tạo access token mới
      const newAccessToken = this.jwtService.sign({ sub: userId });

      return newAccessToken;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
