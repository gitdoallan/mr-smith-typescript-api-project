import * as productModel from '../models/products.model';
import { AddProductsInterface, ProductsInterface } from '../interfaces/products.interface';

export const addProduct = async (
  { name, amount } : AddProductsInterface,
): Promise<ProductsInterface> => {
  const result = await productModel.addProduct({ name, amount });
  return result;
};

export const getAllProducts = async () : Promise<ProductsInterface> => {
  const result = await productModel.getAllProducts();
  return result;
};

export default addProduct;
