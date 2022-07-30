import express from 'express';
import productsRoutes from './products.routes';
import userRoutes from './user.routes';
import ordersRoutes from './orders.routes';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/users', userRoutes);
router.use('/orders', ordersRoutes);

export default router;
