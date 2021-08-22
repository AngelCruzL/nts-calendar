import { Request, Response } from 'express';

import Event from '../models/Event.model';
import { CustomEvent } from '../interfaces/CustomEvent';

export const getEvents = async (req: Request, res: Response) => {
  const events = await Event.find().populate('user', 'name');

  res.status(200).json({
    ok: true,
    events,
  });
};

export const createEvent = async (req: Request, res: Response) => {
  const event = new Event(req.body);

  try {
    (event as CustomEvent).user = req.uid;

    const savedEvent = await event.save();

    res.status(200).json({
      ok: true,
      event: savedEvent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hable con el administrador',
    });
  }
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
