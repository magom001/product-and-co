import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { Product } from '../../slice';

import classes from './style.css';
import { ProductProps } from './Product.connect';
import { CloseButton } from '../../../../components';

const Product: FunctionComponent<ProductProps> = ({
    className,
    product: { name, imageUrl, price, quantity, colour },
}) => {
    return (
        <div className={cn(classes.Container, className)}>
            <div className={classes.Inner}>
                <CloseButton
                    onClick={() => {}}
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
