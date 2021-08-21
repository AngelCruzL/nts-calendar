import { Router } from 'express';
import { check } from 'express-validator';

import * as authController from '../controllers/auth.controller';
import fieldsValidation from '../middlewares/fieldsValidation';

const router = Router();

router.get('/renew', authController.renewToken);

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser al menos de 6 caracteres').isLength(
      { min: 6 }
    ),
    fieldsValidation,
  ],
  authController.login
);

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe ser al menos de 6 caracteres').isLength(
      { min: 6 }
    ),
    fieldsValidation,
  ],
  authController.createNewUser
);

export default router;
