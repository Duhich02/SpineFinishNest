import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { Injectable, Version } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ExtractJwt } from "passport-jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(email: string, password: string): Promise<any> {
    return await this.authService.validateUser(email, password);
  }
}
