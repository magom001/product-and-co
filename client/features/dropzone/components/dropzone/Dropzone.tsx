import React, { useEffect, useRef, useState, FunctionComponent } from 'react';
import cn from 'classnames';

import classes from './style.css';

const onDragover = (event: DragEvent) => {
    event.preventDefault();
};

enum DROPZONE_STATE {
    inactive,
    valid,
    invalid,
}

const SUPPORTED_FILES: Record<string, boolean> = {
    'image/png': true,
    'image/jpeg': true,
};

interface DropzoneProps {
    onFilePicked: (file: File) => void;
    className?: string;
}

const MESSAGES = {
    [DROPZONE_STATE.inactive]: 'Drop product image here',
    [DROPZONE_STATE.invalid]: 'Only JPEG or PNG',
    [DROPZONE_STATE.valid]: 'Drop product image here',
};

const isValidFileType = (event: DragEvent) =>
    event.dataTransfer?.items.length === 1 &&
    SUPPORTED_FILES[event.dataTransfer.items[0].type];

const Dropzone: FunctionComponent<DropzoneProps> = ({
    onFilePicked,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState<DROPZONE_STATE>(DROPZONE_STATE.inactive);

    useEffect(() => {
        const onDrop = (event: DragEvent) => {
            event.preventDefault();
        };

        window.addEventListener('dragover', onDragover);
        window.addEventListener('drop', onDrop);

        return () => {
            window.removeEventListener('dragover', onDragover);
            window.removeEventListener('drop', onDrop);
        };
    }, []);

    useEffect(() => {
        const onDragLeave = (event: DragEvent) => {
            event.preventDefault();

            setState(DROPZONE_STATE.inactive);
        };

        const onDragEnter = (event: DragEvent) => {
            let s = DROPZONE_STATE.invalid;

            if (isValidFileType(event)) {
                s = DROPZONE_STATE.valid;
            }

            setState(s);
        };

        const onDrop = (event: DragEvent) => {
            event.preventDefault();

            if (isValidFileType(event)) {
                onFilePicked(event.dataTransfer?.items[0].getAsFile() as File);
            }

            setState(DROPZONE_STATE.inactive);
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('drop', onDrop, false);
            containerRef.current.addEventListener(
                'dragover',
                onDragover,
                false
            );

            containerRef.current.addEventListener(
                'dragenter',
                onDragEnter,
                false
            );

            containerRef.current.addEventListener(
                'dragleave',
                onDragLeave,
                false
            );
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('drop', onDrop);
                containerRef.current.removeEventListener(
                    'dragover',
                    onDragover
                );
                containerRef.current.removeEventListener(
                    'dragenter',
                    onDragEnter
                );
                containerRef.current.removeEventListener(
                    'dragleave',
                    onDragLeave
                );
            }
        };
    }, [containerRef.current]);

    return (
        <div
            ref={containerRef}
            className={cn(classes.Dropzone, className, {
                [classes.Valid]: state === DROPZONE_STATE.valid,
                [classes.Invalid]: state === DROPZONE_STATE.invalid,
            })}
        >
            {MESSAGES[state]}
            <div className={classes.Frame} />
        </div>
    );
};

export default Dropzone;
