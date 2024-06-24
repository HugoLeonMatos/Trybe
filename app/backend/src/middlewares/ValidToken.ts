import { RequestHandler } from 'express';
import JwtUtils from '../utils/JwtUtils';

const validToken: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const extractToken = authorization.split(' ')[1];
  try {
    // const user = jwt.verify(extractToken, process.env.JWT_SECRET as string);
    const user = JwtUtils.verify(extractToken);
    req.body = user;
    req.body = { ...req.body, user };
    // console.log('passei aqui', user);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validToken;
