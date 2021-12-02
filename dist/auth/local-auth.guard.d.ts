import { ExecutionContext } from '@nestjs/common';
declare const LocalAuthGauard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class LocalAuthGauard extends LocalAuthGauard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
