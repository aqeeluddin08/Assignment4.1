export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Crisps',
    price: 23,
    description: 'Salted'
  },
  {
    id: 2,
    name: 'Popkorn',
    price: 69,
    description: 'flavored spicy'
  },
  {
    id: 3,
    name: 'Honey',
    price: 24,
    description: 'Sweet'
  }
];
