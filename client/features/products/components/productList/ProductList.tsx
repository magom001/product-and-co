import React, { FunctionComponent } from 'react';
import { ProductListProps } from './ProductList.connect';
import Product from '../product';

import classes from './style.css';

const ProductList: FunctionComponent<ProductListProps> = ({ productIds }) => {
    return (
        <section className={classes.Container}>
            {productIds.map((productId) => (
                <Product
                    key={productId}
                    id={productId}
                    className={classes.Product}
                />
            ))}
        </section>
    );
};

export default ProductList;
