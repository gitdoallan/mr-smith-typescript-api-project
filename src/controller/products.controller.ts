import { Request, Response } from 'express';
import * as productServices from '../services/products.services';

export const addProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const result = await productServices.addProduct({ name, amount });
  return res.status(201).json(result);
};

export const getAllProducts = async (_req: Request, res: Response): Promise<Response> => {
  const result = await productServices.getAllProducts();
  return res.status(200).json(result);
};

export default addProduct;
