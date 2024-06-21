import * as jwt from 'jsonwebtoken';

export default class JwtUtils {
  static secret = process.env.JWT_SECRET || 'jwt_secret';

  static generateToken(payload: { id: number }): string {
    return jwt.sign(payload, JwtUtils.secret);
  }

  static verify(token: string): { id: number } {
    return jwt.verify(token, JwtUtils.secret) as { id: number };
  }
}
