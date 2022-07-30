const mockResults = [
  {
    id: 1,
    userId: 1,
    productId: 2,
  },
  {
    id: 3,
    userId: 2,
    productId: 5,
  },
  {
    id: 2,
    userId: 3,
    productId: 3,
  },
  {
    id: 2,
    userId: 3,
    productId: 4,
  },
];

const reduce = mockResults.reduce((acc, curr) => {
  const { id, userId, productId } = curr;
  const findId = acc.findIndex((item) => item.id === id);
  if (findId === -1) {
    acc.push({ id, userId, productsId: [productId] });
  } 
  acc[findId].productsId = [...acc[findId].productsId, productId];
  return acc;
}, []);

console.log(reduce);