import React, {
    useCallback,
    FunctionComponent,
    useEffect,
    useRef,
} from 'react';

import classes from './style.css';

interface AddProductButtonProps {
    onFilePicked: (file: File) => void;
    file: File | null;
}

const AddProductButton: FunctionComponent<AddProductButtonProps> = ({
    onFilePicked,
    file,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!file && inputRef.current) {
            inputRef.current.value = '';
        }
    }, [file]);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.files && event.target.files.length) {
                const file = event.target.files[0];
                onFilePicked(file);
            }
        },
        []
    );

    return (
        <>
            <span className={classes.Button}>
                <input
                    className={classes.Input}
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={onChange}
                    ref={inputRef}
                />
                Add product
            </span>
        </>
    );
};

export default AddProductButton;
