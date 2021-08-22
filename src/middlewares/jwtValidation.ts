import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import config from '../config';

const jwtValidation = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('x-token');

  if (!token || !config.JWT_SEED)
    return res
      .status(401)
      .json({ ok: false, message: 'No hay token en la petición' });

  try {
    const { name, uid } = jwt.verify(token, config.JWT_SEED) as JWTValidation;

    req.name = name;
    req.uid = uid;
  } catch (error) {
    return res.status(401).json({ ok: false, message: 'Token no valido' });
  }

  next();
};

export default jwtValidation;

type JWTValidation = {
  uid: string;
  name: string;
  iat: number;
  exp: number;
};
