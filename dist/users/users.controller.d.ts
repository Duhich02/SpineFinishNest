import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { DeleteResult } from "typeorm";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    update(id: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto & User>;
    remove(id: string): Promise<DeleteResult>;
}
