import { Router } from 'express';

import * as eventsController from '../controllers/events.controller';
import jwtValidation from '../middlewares/jwtValidation';

const router = Router();

router.use(jwtValidation);

router.get('/', eventsController.getEvents);
router.post('/', eventsController.createEvent);
router.put('/:id', eventsController.updateEvent);
router.delete('/:id', eventsController.deleteEvent);

export default router;
