import { AuthCredentiasls } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentiasls: AuthCredentiasls): Promise<void>;
    signIn(authCredentiasls: AuthCredentiasls): Promise<{
        accessToken: string;
    }>;
}
