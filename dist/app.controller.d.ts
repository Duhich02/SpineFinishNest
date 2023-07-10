import { CreateUserDto } from "./users/dto/create-user.dto";
import { UsersService } from "./users/users.service";
import { AuthService } from "./auth/auth.service";
import { User } from "./users/entities/user.entity";
export declare class AppController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
