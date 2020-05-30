import React, { FunctionComponent, useRef } from 'react';
import { ProductListProps } from './ProductList.connect';
import Product from '../product';

import classes from './style.css';
import ArrowButtons from '../arrowButtons';

const ProductList: FunctionComponent<ProductListProps> = ({ products }) => {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section className={classes.Wrapper}>
            <section className={classes.Container} ref={containerRef}>
                {products.length ? (
                    products.map((product) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            className={classes.Product}
                        />
                    ))
                ) : (
                    <div className={classes.EmptyList}>No products found</div>
                )}
            </section>
            {products.length > 1 ? (
                <ArrowButtons
                    containerRef={containerRef}
                    className={classes.ArrowButtons}
                />
            ) : null}
        </section>
    );
};

export default ProductList;
