import Food from '../types/Food';

export default async function useOrder(menu: Food[], totalPrice: number) {
  const url = 'http://localhost:3000/orders';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, totalPrice }),
  });

  const { receipt } = await response.json();

  return receipt;
}
