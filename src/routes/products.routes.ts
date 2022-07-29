import express from 'express';
import * as productsController from '../controller/products.controller';

const router = express.Router();
router.post('/', productsController.addProduct);
router.get('/', productsController.getAllProducts);

export default router;
