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
    step?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { value, onChange, type = 'text', className, placeholder, badge, name, step },
        ref
    ) => {
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
                    ref={ref}
                    step={step}
                />
                {badge && (
                    <span
                        className={cn(classes.InputBadge, {
                            [classes.Transparent]: typeof badge !== 'string',
                        })}
                    >
                        {badge}
                    </span>
                )}
            </div>
        );
    }
);

export default Input;
