import { Controller, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { DeleteResult } from "typeorm";
// import { AuthService } from "src/auth/auth.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService // private authService: AuthService
  ) {}

  // @Post("/register")
  // register(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.register(createUserDto);
  // }

  // @UseGuards(AuthGuard("local"))
  // @Post("/login")
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UpdateUserDto & User> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<DeleteResult> {
    return this.usersService.remove(+id);
  }
}
