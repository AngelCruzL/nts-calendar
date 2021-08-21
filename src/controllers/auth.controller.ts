import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/User.model';

export const createNewUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (user)
      return res.status(400).json({
        ok: false,
        message: 'El correo ya ha sido registrado por otro usuario',
      });

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    return res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Ocurrió un error',
    });
  }
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  return res.json({
    ok: true,
    message: 'Login exitoso',
    email,
    password,
  });
};

export const renewToken = (req: Request, res: Response) => {
  res.json({ ok: true, message: 'Token' });
};
