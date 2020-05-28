import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import classes from './style.css';

interface InputProps {
    className?: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'number';
    name?: string;
    badge?: string | React.ReactElement;
}

const Input: FunctionComponent<InputProps> = ({
    value,
    onChange,
    type = 'text',
    className,
    placeholder,
    badge,
    name,
}) => {
    return (
        <div className={cn(classes.InputWrapper, className)}>
            <input
                className={classes.Input}
                onChange={onChange}
                readOnly={!Boolean(onChange)}
                disabled={!Boolean(onChange)}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
            />
            {badge && (
                <span
                    className={cn(classes.InputBadge, {
                        [classes.Transparent]: !(badge instanceof String),
                    })}
                >
                    {badge}
                </span>
            )}
        </div>
    );
};

export default Input;
