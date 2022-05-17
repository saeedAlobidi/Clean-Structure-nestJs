import { SetMetadata } from '@nestjs/common';
 

export const ROLES_KEY = 'roles';
export const POLICY_KEY = 'policy';
export const Roles = (...roles: String[]) => SetMetadata(ROLES_KEY, roles);
export const Policy = (...policy: String[]) => SetMetadata(POLICY_KEY, policy);