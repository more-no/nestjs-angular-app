import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AtGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const accessToken = GqlExecutionContext.create(context).getContext().req;
    return accessToken;
  }
}
