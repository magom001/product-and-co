import React, { FunctionComponent, useCallback, useRef } from 'react';
import _debounce from 'lodash/debounce';
import { FilterInputProps } from './FilterInput.connect';
import { Input, CloseButton, Icon } from '../../../../components';

import classes from './style.css';

const FilterInput: FunctionComponent<FilterInputProps> = ({
    pattern,
    setPattern,
    resetPattern,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClear = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }

        resetPattern();
    }, [resetPattern]);

    const onFilter = useCallback(
        _debounce((value: string) => {
            setPattern(value.toLowerCase());
        }, 500),
        [setPattern]
    );

    return (
        <div className={classes.Container}>
            <Icon type="search" size="l" className={classes.Icon} />
            <Input
                onChange={(e) => onFilter(e.target.value)}
                className={classes.Input}
                ref={inputRef}
            />
            {pattern && (
                <CloseButton
                    onClick={onClear}
                    className={classes.ClearButton}
                />
            )}
        </div>
    );
};

export default FilterInput;
