import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import classes from './style.css';

import search from './icons/search.svg';
import arrow from './icons/arrow.svg';

type IconType = 'search' | 'arrow';
type Size = 's' | 'm' | 'l';

interface IconProps {
    type: IconType;
    size?: Size;
    className?: string;
}

const SvgUrls: Record<IconType, string> = {
    search,
    arrow,
};

const SizeStyle: Record<Size, { width: any; height: any }> = {
    s: {
        width: '12px',
        height: '12px',
    },
    m: { width: '16px', height: '16px' },
    l: { width: '24px', height: '24px' },
};

const Icon: FunctionComponent<IconProps> = ({
    type,
    size = 'm',
    className,
}) => {
    return (
        <i
            className={cn(classes.Icon, className)}
            style={{
                backgroundImage: `url(${SvgUrls[type]})`,
                ...SizeStyle[size],
            }}
        />
    );
};

export default Icon;
