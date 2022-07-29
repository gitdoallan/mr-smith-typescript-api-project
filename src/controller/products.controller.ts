import { Request, Response } from 'express';
import * as productServices from '../services/products.services';

export const addProduct = async (req: Request, res: Response): Promise<void> => {
  const { name, amount } = req.body;
  const result = await productServices.addProduct({ name, amount });
  res.status(201).json(result);
};

export default addProduct;
