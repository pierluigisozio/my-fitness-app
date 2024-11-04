export interface IUserPayload {
  username: string;
  password: string;
}

export interface ILogoutPayload {
  jwt: string;
}
