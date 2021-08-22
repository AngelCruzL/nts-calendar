import { Router } from 'express';
import { check } from 'express-validator';

import isDate from '../helpers/isDate';
import * as eventsController from '../controllers/events.controller';
import fieldsValidation from '../middlewares/fieldsValidation';
import jwtValidation from '../middlewares/jwtValidation';

const router = Router();

router.use(jwtValidation);

router.get('/', eventsController.getEvents);

router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    fieldsValidation,
  ],
  eventsController.createEvent
);

router.put(
  '/:id',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio es obligatoria').custom(isDate),
    check('end', 'La fecha de finalización es obligatoria').custom(isDate),
    fieldsValidation,
  ],
  eventsController.updateEvent
);
router.delete('/:id', eventsController.deleteEvent);

export default router;
