export interface UserLoginResponse {
  email: string;
  id: number;
  roles: Array<string>;
  expirationDate: Date;
}
