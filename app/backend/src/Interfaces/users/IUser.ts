export interface ILogin {
  email: string;
  password: string;
}

export default interface IUser{
  id: number,
  username: string,
  password: string,
  role: string,
  email: string,
}
