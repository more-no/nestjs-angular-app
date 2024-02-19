import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { GetUserRt, GetUserId, Public } from '../common/decorators';
import { AuthLoginInput, AuthSignupInput, Tokens, User } from '../graphql';
import { UseGuards } from '@nestjs/common';
import { AtGuard, RtGuard } from '../common/guards';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation('signup')
  async signup(@Args('dto') dto: AuthSignupInput): Promise<Tokens> {
    return this.authService.signup(dto);
  }

  @Public()
  @Mutation('login')
  async login(@Args('dto') dto: AuthLoginInput): Promise<Tokens> {
    return this.authService.login(dto);
  }

  @Mutation('logout')
  @UseGuards(AtGuard)
  async logout(@GetUserId() userId: number): Promise<Boolean> {
    return this.authService.logout(userId);
  }

  @Mutation('refresh')
  @UseGuards(RtGuard)
  async refreshTokens(
    @GetUserId() userId: number,
    @GetUserRt() refreshToken: string,
  ): Promise<Tokens> {
    return this.authService.refreshTokens(userId, refreshToken);
  }
}