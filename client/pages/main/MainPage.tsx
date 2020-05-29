import React from 'react';

import classes from './style.css';
import ProductList from '../../features/products';
import { Dropzone } from '../../features/dropzone';
import NotificationModal from '../../features/notification';

const MainPage = () => {
    return (
        <section className={classes.Page}>
            <Dropzone />
            <ProductList />
            <NotificationModal />
        </section>
    );
};

export default MainPage;
