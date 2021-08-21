import { Request, Response } from 'express';

export const createNewUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  return res.status(201).json({
    ok: true,
    message: 'New User',
    name,
    email,
    password,
  });
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
