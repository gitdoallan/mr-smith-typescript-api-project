import connection from './connection';
import { AddProductsInterface, ProductsInterface } from '../interfaces/products.interface';

export const addProduct = async (
  { name, amount }: AddProductsInterface,
): Promise<ProductsInterface> => {
  const [rows] = await connection
    .execute(`
      INSERT INTO Trybesmith.Products (name, amount, orderId)
      VALUES (?, ?, ?)
    `, [name, amount, null]) as { insertId: number }[];
  return { id: rows.insertId, name, amount };
};

export const getAllProducts = async (): Promise<ProductsInterface> => {
  const [rows] = await connection
    .execute(`
    SELECT * FROM Trybesmith.Products
    `) as unknown as ProductsInterface[];
  return rows;
};

export default addProduct;
