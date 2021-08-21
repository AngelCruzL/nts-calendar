import { Request, Response } from 'express';

export const createNewUser = (req: Request, res: Response) => {
  res.json({ ok: true, message: 'New User' });
};

export const login = (req: Request, res: Response) => {
  res.json({ ok: true, message: 'Login' });
};

export const renewToken = (req: Request, res: Response) => {
  res.json({ ok: true, message: 'Token' });
};
