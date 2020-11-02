import { Injectable, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from './jwt-payload.interface';
import { AuthCredentiasls } from './dto/auth-credentials.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository : UserRepository,
    private jwtService : JwtService
  ) {}


  async signUp(authCredentiasls :AuthCredentiasls):Promise<void>{
    return this.userRepository.signUp(authCredentiasls)
  }

  async signIn(authCredentiasls :AuthCredentiasls):Promise<{accessToken: string}>{
    const username = await this.userRepository.validateUserPassword(authCredentiasls);

    if(!username){
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {username};

    const accessToken = await this.jwtService.sign(payload);

    return { accessToken }
  }
}
