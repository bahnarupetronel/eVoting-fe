export interface UserDetailsModel {
  id: string;
  name: string;
  email: string;
  cnp: string;
  seriesAndNumber: string;
  addressLine1: string;
  addressLine2: string;
  phoneNumber: string;
  postalCode: string;
  localityId: number;
  countyId: number;
  country: string;
  linkCIPhoto: string;
  roles: Array<String>;
  enabled: boolean;
  authorities?: any;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
}
