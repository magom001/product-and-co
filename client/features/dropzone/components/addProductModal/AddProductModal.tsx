import React, { FunctionComponent } from 'react';
import { Modal, Button, Input } from '../../../../components';

import classes from './style.css';
import { Product } from '../../../products/slice';
import { Spinner } from '../../../../components';

interface AddProductModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: () => void;
    imgSrc: string;
    product: Omit<Product, 'id' | 'fileName'>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    progress: boolean;
}

const AddProductModal: FunctionComponent<AddProductModalProps> = ({
    onClose,
    onSave,
    visible,
    imgSrc,
    product,
    onChange,
    progress,
}) => {
    return (
        <Modal visible={visible} onClose={onClose}>
            {progress && (
                <section className={classes.BlockScreen}>
                    <Spinner />
                </section>
            )}

            <section className={classes.Container}>
                <img src={imgSrc} className={classes.Image} />
                <Input
                    className={classes.Input}
                    name="name"
                    placeholder="Product name"
                    onChange={onChange}
                    value={product.name}
                />

                <Input
                    className={classes.Input}
                    name="quantity"
                    type="number"
                    placeholder="Quantity"
                    onChange={onChange}
                    badge="Pcs"
                    value={product.quantity}
                />

                <Input
                    className={classes.Input}
                    name="price"
                    type="number"
                    placeholder="Price"
                    onChange={onChange}
                    badge="$"
                    value={product.price}
                />

                <Input
                    className={classes.Input}
                    name="colour"
                    placeholder="Colour"
                    onChange={onChange}
                    value={product.colour}
                    badge={
                        <div
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '50%',
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundColor: `${product.colour}`,
                            }}
                        />
                    }
                />

                <div className={classes.ButtonContainer}>
                    <Button
                        onClick={onSave}
                        className={classes.Button}
                        theme="action"
                    >
                        Save
                    </Button>
                    <Button onClick={onClose} className={classes.Button}>
                        Cancel
                    </Button>
                </div>
            </section>
        </Modal>
    );
};

export default AddProductModal;
