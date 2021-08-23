import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/User.model';
import generateJWT from '../helpers/jwt';

export const createNewUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });

  try {
    if (user)
      return res.status(400).json({
        ok: false,
        message: 'El correo ya ha sido registrado por otro usuario',
      });

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateJWT(user.id, user.name);

    return res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Ocurrió un error',
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    if (!user)
      return res.status(400).json({
        ok: false,
        message: 'Usuario o contraseña incorrecto',
      });

    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword)
      return res.status(400).json({
        ok: false,
        message: 'Contraseña no valida',
      });

    const token = await generateJWT(user.id, user.name);

    return res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Ocurrió un error',
    });
  }
};

export const renewToken = async (req: Request, res: Response) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};
