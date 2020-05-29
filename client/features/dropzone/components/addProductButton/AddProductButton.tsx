import React, {
    useCallback,
    FunctionComponent,
    useEffect,
    useRef,
} from 'react';

import classes from './style.css';
import { Button } from '../../../../components';

interface AddProductButtonProps {
    onFilePicked: (file: File) => void;
    file: File | null;
    className?: string;
}

const AddProductButton: FunctionComponent<AddProductButtonProps> = ({
    onFilePicked,
    file,
    className,
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
        <Button theme="action" className={className}>
            <input
                className={classes.Input}
                type="file"
                accept="image/png, image/jpeg"
                onChange={onChange}
                ref={inputRef}
            />
            Add product
        </Button>
    );
};

export default AddProductButton;
