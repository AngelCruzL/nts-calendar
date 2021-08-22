import { Request, Response } from 'express';

export const getEvents = (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: 'get events',
  });
};

export const createEvent = (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: 'create',
  });
};
export const updateEvent = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    ok: true,
    message: 'update events',
  });
};
export const deleteEvent = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    ok: true,
    message: 'delete',
  });
};
