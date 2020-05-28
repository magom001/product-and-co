import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import classes from './style.css';

interface ButtonProps {
    className?: string;
    theme?: 'default' | 'action';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({
    children,
    className,
    theme = 'default',
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(classes.Button, className, {
                [classes.ThemeDefault]: theme === 'default',
                [classes.ThemeAction]: theme === 'action',
            })}
        >
            {children}
        </button>
    );
};

export default Button;
