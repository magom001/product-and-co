import React from 'react';

import classes from './style.css';
import ProductList from '../../features/products';

const MainPage = () => {
    return (
        <>
            <h1 className={classes.title}>Main Page</h1>
            <ProductList />
        </>
    );
};

export default MainPage;
