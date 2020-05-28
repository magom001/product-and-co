import React from 'react';

import classes from './style.css';
import ProductList from '../../features/products';
import { Dropzone } from '../../features/dropzone';

const MainPage = () => {
    return (
        <section className={classes.Page}>
            <Dropzone />
            <ProductList />
        </section>
    );
};

export default MainPage;
