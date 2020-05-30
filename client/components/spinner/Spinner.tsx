import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import classes from './style.css';

interface SpinnerProps {
    className?: string;
}

const Spinner: FunctionComponent<SpinnerProps> = ({ className }) => (
    <div className={cn(classes.Spinner, className)} />
);

export default Spinner;
