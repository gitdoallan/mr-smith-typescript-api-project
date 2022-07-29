import connection from './connection';
import { AddProductsInterface } from '../interfaces/products.interface';

export const addProduct = async ({ name, amount }: AddProductsInterface) => {
  const [rows] = await connection
    .execute(`
      INSERT INTO Trybesmith.Products (name, amount, orderId)
      VALUES (?, ?, ?)
    `, [name, amount, null]) as { insertId: number }[];
  return { id: rows.insertId, name, amount };
};

export default addProduct;
