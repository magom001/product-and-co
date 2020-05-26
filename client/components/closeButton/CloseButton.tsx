import React, { FunctionComponent, useMemo } from 'react';
import cn from 'classnames';

import classes from './style.css';

const BUTTON_SIZES = {
    s: 12,
    m: 16,
    l: 24,
};

interface CloseButtonProps {
    onClick: () => void;
    className?: string;
    size?: keyof typeof BUTTON_SIZES;
}

const CloseButton: FunctionComponent<CloseButtonProps> = ({
    onClick,
    size = 'm',
    className,
}) => {
    const sizeAsNumber = useMemo<number>(() => {
        return BUTTON_SIZES[size];
    }, [size]);

    return (
        <button onClick={onClick} className={cn(classes.Button, className)}>
            <svg
                width={sizeAsNumber}
                height={sizeAsNumber}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    stroke="#000"
                    strokeWidth="2"
                />
                <line
                    x1="24"
                    y1="0"
                    x2="0"
                    y2="24"
                    stroke="#000"
                    strokeWidth="2"
                />
            </svg>
        </button>
    );
};

export default CloseButton;
