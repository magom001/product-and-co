import { Product } from '../client/features/products/slice';

export const mockProducts: Record<Product['id'], Product> = {
    milk: {
        id: 'milk',
        name: 'Milk',
        quantity: 123,
        price: 0.99,
        fileName: 'milk.jpg',
        colour: 'red',
    },
    saussage: {
        id: 'saussage',
        name: 'Saussage',
        quantity: 0,
        price: 3.5,
        fileName: 'saussage.jpg',
        colour: 'red',
    },
    bread: {
        id: 'bread',
        name: 'Bread bread bread bread bread bread bread bread',
        quantity: 10,
        price: 1.25,
        fileName: 'bread.jpg',
        colour: 'white',
    },
};
