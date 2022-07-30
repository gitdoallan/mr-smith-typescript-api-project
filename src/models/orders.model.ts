import connection from './connection';
import { OrdersInterface } from '../interfaces/orders.interface';

const organizeOrdersReduce = (rows: OrdersInterface[]) => {
  const reduce = rows.reduce((acc: Partial<OrdersInterface>[], curr: OrdersInterface) => {
    const { id, userId, productId } = curr;
    const findId = acc.findIndex((item) => item.id === id);
    if (findId === -1 || !findId) {
      acc.push({ id, userId, productsIds: [productId] });
    } else {
      acc[findId]?.productsIds?.push(productId);
    }
    return acc;
  }, []);
  return reduce;
};

export const getAllOrders = async (): Promise<OrdersInterface[]> => {
  const [rows] = await connection
    .execute(`
      SELECT O.id AS id, O.userId AS userId, P.id as productId
      FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P ON O.id = P.orderId
      INNER JOIN Trybesmith.Users AS U ON O.userId = U.id;
    `) as unknown as OrdersInterface[][];
  const reduce = organizeOrdersReduce(rows) as OrdersInterface[];
  return reduce;
};

export default getAllOrders;
