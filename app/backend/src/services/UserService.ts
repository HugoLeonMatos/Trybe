import * as bcrypt from 'bcryptjs';

import { ServiceResponse } from '../Interfaces/ServiceResponse';
import Users from '../database/models/Users';
import JwtUtils from '../utils/JwtUtils';
import { ILogin } from '../Interfaces/users/IUser';

type TokenResponsePayload = {
  token: string
};
export default class UserService {
  constructor(
    private Model = Users,
  ) { }

  public async login(payload: ILogin): Promise<ServiceResponse<TokenResponsePayload>> {
    const { email, password } = payload;
    const user = await this.Model.findOne({ where: { email } });

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const isValidPassword = await bcrypt.compare(password, user.dataValues.password);
    console.log('isvalid', isValidPassword);

    if (!isValidPassword) {
      return {
        status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' },
      };
    }

    const token = JwtUtils.generateToken({ id: user.id });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
