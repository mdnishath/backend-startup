import express from 'express';
import { TestControllers } from './test.controller';
// import { validateRequest } from '../../../middlewares/validateRequest';
// import { createTestValidationSchema } from './test.validation';
const router = express.Router();

router.post('/', TestControllers.createTestCollection);

export const TestRoutes = router;
