import { Product } from '../client/features/products/slice';

export const mockProducts: Record<Product['id'], Product> = {
    milk: {
        id: 'milk',
        name: 'Milk',
        quantity: 123,
        price: 0.99,
        imageUrl: '/assets/images/milk.jpg',
        colour: 'red',
    },
    saussage: {
        id: 'saussage',
        name: 'Saussage',
        quantity: 0,
        price: 3.5,
        imageUrl: '/assets/images/saussage.jpg',
        colour: 'red',
    },
    bread: {
        id: 'bread',
        name: 'Bread bread bread bread bread bread bread bread',
        quantity: 10,
        price: 1.25,
        imageUrl: '/assets/images/bread.jpg',
        colour: 'white',
    },
};
