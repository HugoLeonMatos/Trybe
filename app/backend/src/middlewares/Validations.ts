import { NextFunction, Request, Response } from 'express';

export default class Validations {
  static validateEmail(req: Request, res: Response, next: NextFunction): Response | void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }

  static ValidateSenha(req: Request, res: Response, next: NextFunction): Response | void {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    next();
  }
}

// import { NextFunction, Request, Response } from 'express';

// export default class Validations {
//   static validateEmail(req: Request, res: Response, next: NextFunction): void {
//     const email = req.body.email?.trim(); // Handle potential missing email field

//     if (!email || !email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//       return res.status(401).json({ message: 'Invalid email format' });
//     }

//     next();
//   }

//   static validatePassword(req: Request, res: Response, next: NextFunction): void {
//     const password = req.body.password?.trim(); // Handle potential missing password field

//     if (!password || password.length < 6) {
//       return res.status(401).json({ message: 'Password must be at least 6 characters long' });
//     }

//     next();
//   }
// }
