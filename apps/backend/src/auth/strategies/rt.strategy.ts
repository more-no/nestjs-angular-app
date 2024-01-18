import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express'; //  ==> not sure i need it

// refresh token strategy
// here the jwt is the name of the strategy and is used to define the AuthGuard in the controller
@Injectable()
// here passport take care of the validation of the token
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(/*config: ConfigService*/) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'RT_SECRET',
      passReqToCallBack: true,
    });
  }

  validate(req: Request, payload: any) {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();

    return { ...payload, refreshToken };
  }
}
