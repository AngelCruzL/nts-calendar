import { Router } from 'express';

import * as authController from '../controllers/auth.controller';

const router = Router();

router.get('/renew', authController.renewToken);

router.post('/', authController.login);
router.post('/new', authController.createNewUser);

export default router;
