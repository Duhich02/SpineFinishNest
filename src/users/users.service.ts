import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async register(createUserDto: CreateUserDto): Promise<CreateUserDto & User> {
    const saltOrRounds = 10;
    createUserDto.password = await bcrypt.hash(createUserDto.password, saltOrRounds);

    return this.repository.save(createUserDto);
  }

  async login(createUserDto: CreateUserDto): Promise<boolean> {
    const user = await this.repository.findOneBy({
      email: createUserDto.email,
    });

    if (!user) return false;
    return await bcrypt.compare(createUserDto.password, user.password);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(email: string): Promise<User> {
    return this.repository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateUserDto & User> {
    return this.repository.save({ ...updateUserDto, id });
  }

  remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
