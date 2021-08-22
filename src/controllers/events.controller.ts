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

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);
    const { uid } = req;

    if (!event)
      return res.status(404).json({
        ok: false,
        message: 'No existe ningún evento con ese ID',
      });

    if (event.user.toString() !== uid)
      return res.status(401).json({
        ok: false,
        message: 'No tiene privilegio para editar este evento',
      });

    const newEvent = { ...req.body, user: uid };

    const eventUpdated = await Event.findByIdAndUpdate(id, newEvent, {
      new: true,
    });

    return res.json({
      ok: true,
      eventUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hable con el administrador',
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { uid } = req;

  try {
    const event = await Event.findById(id);

    if (!event)
      return res.status(404).json({
        ok: false,
        message: 'No existe ningún evento con ese ID',
      });

    if (event.user.toString() !== uid)
      return res.status(401).json({
        ok: false,
        message: 'No tiene privilegio para eliminar este evento',
      });

    await Event.findByIdAndDelete(id);

    return res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: 'Hable con el administrador',
    });
  }
};
