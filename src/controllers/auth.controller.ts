import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const createNewUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ ok: false, errors: errors.mapped() });

  res.status(201).json({
    ok: true,
    message: 'New User',
    name,
    email,
    password,
  });
};

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ ok: false, errors: errors.mapped() });

  res.json({ ok: true, message: 'Login exitoso' });
};

export const renewToken = (req: Request, res: Response) => {
  res.json({ ok: true, message: 'Token' });
};
