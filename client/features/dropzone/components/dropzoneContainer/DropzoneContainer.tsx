import React, { useState, useCallback, FunctionComponent } from 'react';
import { saveProduct } from '../../../../api';

import AddProductButton from '../addProductButton';
import classes from './style.css';
import AddProductModal from '../addProductModal';
import Dropzone from '../dropzone';
import { DropzoneProps } from './DropzoneContainer.connect';
import { Product } from '../../../products/slice';

const INITIAL_PRODUCT_VALUES = {
    name: 'Product XYZ',
    quantity: 1,
    price: 1,
    colour: 'white',
};

const DropzoneContainer: FunctionComponent<DropzoneProps> = ({
    addProduct,
    dispatchNotification,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [progress, setProgress] = useState<boolean>(false);
    const [product, setProduct] = useState<Omit<Product, 'id' | 'fileName'>>(
        INITIAL_PRODUCT_VALUES
    );

    const onProductChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setProduct(
                Object.assign({}, product, {
                    [event.target.name]: event.target.value,
                })
            );
        },
        [product]
    );

    const onFilePicked = useCallback((file: File) => {
        setFile(file);

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setImgSrc(fileReader.result as string);
        };

        fileReader.readAsDataURL(file);
    }, []);

    const onModalClose = useCallback(() => {
        setImgSrc(null);
        setFile(null);
        setProduct(INITIAL_PRODUCT_VALUES);
    }, []);

    const onSave = useCallback(async () => {
        if (file) {
            setProgress(true);
            const response = await saveProduct({ file, ...product });
            setProgress(false);

            if (response.error) {
                dispatchNotification(`Failed to save product ${product.name}`);
            } else {
                addProduct(Object.assign({}, product, response));
            }

            onModalClose();
        }
    }, [file, product]);

    return (
        <>
            <div className={classes.Container}>
                <AddProductButton onFilePicked={onFilePicked} file={file} className={classes.Control} />
                <Dropzone onFilePicked={onFilePicked} className={classes.Control} />
            </div>
            <AddProductModal
                progress={progress}
                onChange={onProductChange}
                product={product}
                onClose={onModalClose}
                onSave={onSave}
                visible={Boolean(imgSrc)}
                imgSrc={imgSrc as string}
            />
        </>
    );
};

export default DropzoneContainer;
