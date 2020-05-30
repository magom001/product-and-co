import React, { FunctionComponent, useState, useEffect } from 'react';

import classes from './style.css';
import cn from 'classnames';
import Spinner from '../spinner';

interface PreviewProps {
    src: string;
    className?: string;
}

enum LOADING_STATE {
    loading,
    loaded,
    error,
}

const Preview: FunctionComponent<PreviewProps> = ({ src, className }) => {
    const [state, setState] = useState<LOADING_STATE>(LOADING_STATE.loading);

    useEffect(() => {
        setState(LOADING_STATE.loading);

        const img: HTMLImageElement = new Image();
        img.addEventListener('load', () => {
            setState(LOADING_STATE.loaded);
        });

        img.addEventListener('error', () => {
            setState(LOADING_STATE.error);
        });

        img.src = src;
    }, [src]);

    return (
        <div
            className={cn(classes.Container, className, {
                [classes.Loading]: state === LOADING_STATE.loading,
                [classes.Loaded]: state === LOADING_STATE.loaded,
                [classes.Error]: state === LOADING_STATE.error,
            })}
        >
            <img className={classes.Image} src={src} />
            <Spinner className={classes.Spinner} />
            <span className={classes.ErrorMessage}>Failed to load</span>
        </div>
    );
};

export default Preview;
