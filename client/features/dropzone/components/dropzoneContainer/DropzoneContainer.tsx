import React, { useState, useCallback } from 'react';
import { saveProduct } from '../../../../api';

import AddProductButton from '../addProductButton';
import classes from './style.css';
import AddProductModal from '../addProductModal';

const DropzoneContainer = () => {
    const [file, setFile] = useState<File | null>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

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

    const onSave = useCallback(() => {
        if (file) {
            saveProduct(file);
        }
    }, [file]);

    return (
        <>
            <div className={classes.Container}>
                <AddProductButton onFilePicked={onFilePicked} file={file} />
            </div>
            <AddProductModal
                onClose={onModalClose}
                onSave={onSave}
                visible={Boolean(imgSrc)}
                imgSrc={imgSrc as string}
            />
        </>
    );
};

export default DropzoneContainer;
