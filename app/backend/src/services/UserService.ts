// import * as  bcrypt from 'bcryptjs';
// import { JwtUtils } from '../utils/JwtUtils';
// import { ServiceResponse } from '../Interfaces/ServiceResponse';
// import { ILogin } from '../Interfaces/users/IUser';
// import Users from '../database/models/Users';

// type TokenResponsePayload = {
//   token: string
// }
// export default class UserService {
//   constructor(
//     private Model = Users,
//   ) { }

//   public async login(payload: ILogin): Promise<ServiceResponse<TokenResponsePayload>> {
//     const { email, password } = payload;
//     const user = await this.Model.findOne({ where: { email } });

//     if (!user) {
//       return { status: 'NOT_FOUND', data: { message: 'All fields must be filled' } }
//     }

//     const isValidPassword = await bcrypt.compare(payload.password, user.password);

//     const token = JwtUtils.generateToken({id: user.id});
//   }
// }
