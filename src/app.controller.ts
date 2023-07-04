import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDto } from "./users/dto/create-user.dto";
import { UsersService } from "./users/users.service";
import { AuthService } from "./auth/auth.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Auth")
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post("auth/register")
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @UseGuards(AuthGuard("local"))
  @Post("auth/login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
