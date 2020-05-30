import React, { FunctionComponent } from 'react';
import { ProductListProps } from './ProductList.connect';
import Product from '../product';

import classes from './style.css';

const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
    return (
        <section className={classes.Container}>
            {products.map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    className={classes.Product}
                />
            ))}
        </section>
    );
};

export default ProductList;
