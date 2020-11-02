import { AuthCredentiasls } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository extends Repository<User> {
    signUp(authCredentials: AuthCredentiasls): Promise<void>;
    validateUserPassword(authCredentials: AuthCredentiasls): Promise<string>;
    private hashPasswors;
}
