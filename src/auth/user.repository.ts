import { AuthCredentiasls } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentials: AuthCredentiasls): Promise<void> {
    const { username, password } = authCredentials;

    const user = new User();

    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPasswors(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        //duplicate username
        throw new ConflictException('This username already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentials: AuthCredentiasls,
  ): Promise<string> {
    const { username, password } = authCredentials;

    const user = await this.findOne({ username });

    if (user && (await user.validatePassword(password))) {
      return username;
    } else {
      return null;
    }
  }

  private async hashPasswors(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
