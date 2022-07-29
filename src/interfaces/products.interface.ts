export interface AddProductsInterface {
  name: string;
  amount: number;
}

export interface ProductsInterface extends AddProductsInterface {
  id: number;
}
