import * as ordersModel from '../models/orders.model';
import { OrdersInterface } from '../interfaces/orders.interface';

export const getAllOrders = async (): Promise<OrdersInterface[]> => {
  const rows = await ordersModel.getAllOrders();
  return rows;
};

export default getAllOrders;
