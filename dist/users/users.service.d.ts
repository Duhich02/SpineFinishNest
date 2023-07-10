import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { DeleteResult, Repository } from "typeorm";
import { User } from "./entities/user.entity";
export declare class UsersService {
    private repository;
    constructor(repository: Repository<User>);
    register(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    login(createUserDto: CreateUserDto): Promise<boolean>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto & User>;
    remove(id: number): Promise<DeleteResult>;
}
