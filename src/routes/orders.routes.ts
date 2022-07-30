import express from 'express';
import * as ordersController from '../controller/orders.controller';

const router = express.Router();
router.get('/', ordersController.getAllOrders);

export default router;
