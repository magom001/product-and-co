import React, { useState, useCallback, FunctionComponent } from 'react';
import { saveProduct } from '../../../../api';

import AddProductButton from '../addProductButton';
import classes from './style.css';
import AddProductModal from '../addProductModal';
import { DropzoneProps } from './DropzoneContainer.connect';
import { Product } from '../../../products/slice';

const DropzoneContainer: FunctionComponent<DropzoneProps> = ({
    addProduct,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [progress, setProgress] = useState<boolean>(false);
    const [product, setProduct] = useState<Omit<Product, 'id' | 'fileName'>>({
        name: 'Product XYZ',
        quantity: 1,
        price: 1,
        colour: 'white',
    });

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
    }, []);

    const onSave = useCallback(async () => {
        if (file) {
            setProgress(true);
            const response = await saveProduct({ file, ...product });
            console.log(response);
            // TODO: handle bad response
            addProduct(Object.assign({}, product, response));
            setProgress(false);
        }
    }, [file, product]);

    return (
        <>
            <div className={classes.Container}>
                <AddProductButton onFilePicked={onFilePicked} file={file} />
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
