import { Body, Controller, Post, Request, UseGuards, UsePipes } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {CreateUserDto, CreateUserSchema} from "./users/dto/create-user.dto";
import { UsersService } from "./users/users.service";
import { AuthService } from "./auth/auth.service";
import { ApiTags } from "@nestjs/swagger";
import { User } from "./users/entities/user.entity";
import {JoiValidationPipe} from "./pipes/ValidationPipes";

@ApiTags("Auth")
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post("auth/register")
  @UsePipes(new JoiValidationPipe(CreateUserSchema))
  register(@Body() createUserDto: CreateUserDto): Promise<CreateUserDto & User> {
    return this.usersService.register(createUserDto);
  }

  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  async login(@Request() req): Promise<{ access_token: string }> {
    return this.authService.login(req.user);
  }
}
