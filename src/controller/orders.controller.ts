import { Request, Response } from 'express';
import * as ordersServices from '../services/orders.services';

export const getAllOrders = async (_req: Request, res: Response): Promise<Response> => {
  const result = await ordersServices.getAllOrders();
  return res.status(200).json(result);
};

export default getAllOrders;
