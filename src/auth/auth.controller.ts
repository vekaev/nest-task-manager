import { AuthCredentiasls } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Post,
  ValidationPipe,
  UseGuards,
  Req,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(
    @Body(ValidationPipe) authCredentiasls: AuthCredentiasls,
  ): Promise<void> {
    return this.authService.signUp(authCredentiasls);
  }

  @Post('signIn')
  signIn(
    @Body(ValidationPipe) authCredentiasls: AuthCredentiasls,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentiasls);
  }
}
