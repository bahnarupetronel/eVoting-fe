import { RoleModel } from "./roles.model";

export interface UserDetailsModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cnp: string;
  seriesAndNumber: string;
  addressLine1: string;
  addressLine2: string;
  phoneNumber: string;
  postalCode: string;
  localityId: number;
  countyId: number;
  roles: Array<RoleModel>;
  enabled: boolean;
  authorities?: any;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  isEmailConfirmed: boolean;
  isIdentityVerified: boolean;
}
