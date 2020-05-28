import React, { useState, FunctionComponent } from 'react';
import { Modal } from '../../../../components';

import classes from './style.css';

interface AddProductModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: () => void;
    imgSrc: string;
}

const AddProductModal: FunctionComponent<AddProductModalProps> = ({
    onClose,
    onSave,
    visible,
    imgSrc,
}) => {
    return (
        <Modal visible={visible} onClose={onClose}>
            <section className={classes.Container}>
                <div>Add product modal</div>
                <img src={imgSrc} className={classes.Image} />
                <button onClick={onSave}>Save</button>
            </section>
        </Modal>
    );
};

export default AddProductModal;
