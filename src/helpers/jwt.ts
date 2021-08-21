import jwt from 'jsonwebtoken';
import config from '../config';

export default function generateJWT(uid: string, name: string) {
  return new Promise<string>((resolve, reject) => {
    const payload = { uid, name };

    if (!config.JWT_SEED) return;

    jwt.sign(payload, config.JWT_SEED, { expiresIn: '2h' }, (error, token) => {
      if (error) {
        console.log(error);
        reject('No se pudo generar el token');
      }

      if (token) resolve(token);
    });
  });
}
