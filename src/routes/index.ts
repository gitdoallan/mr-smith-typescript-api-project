import express from 'express';
import productsRoutes from './products.routes';
import userRoutes from './user.routes';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/users', userRoutes);

export default router;
