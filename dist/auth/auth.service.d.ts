import { AuthCredentiasls } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(authCredentiasls: AuthCredentiasls): Promise<void>;
    signIn(authCredentiasls: AuthCredentiasls): Promise<{
        accessToken: string;
    }>;
}
