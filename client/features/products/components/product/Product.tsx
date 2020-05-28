import React, { FunctionComponent, useCallback } from 'react';
import cn from 'classnames';
import { Product } from '../../slice';

import classes from './style.css';
import { ProductProps } from './Product.connect';
import { CloseButton } from '../../../../components';

const Product: FunctionComponent<ProductProps> = ({
    className,
    product: { name, price, quantity, colour, id },
    imageUrl,
    deleteProduct,
}) => {
    const onDeleteButtonClick = useCallback(() => {
        deleteProduct(id);
    }, [deleteProduct, id]);

    return (
        <div className={cn(classes.Container, className)}>
            <div className={classes.Inner}>
                <CloseButton
                    onClick={onDeleteButtonClick}
                    className={classes.CloseButton}
                />
                <span className={classes.ProductName}>{name}</span>
                <img className={classes.Image} src={imageUrl} />
                <div className={classes.Attribute}>
                    Price: ${price.toFixed(2)}
                </div>
                <div className={classes.Attribute}>Quantity: {quantity}</div>
                <div className={classes.Attribute}>Colour: {colour}</div>
            </div>
        </div>
    );
};

export default Product;
