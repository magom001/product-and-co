import React, { FunctionComponent, useCallback, useState } from 'react';
import _debounce from 'lodash/debounce';
import { FilterInputProps } from './FilterInput.connect';

const FilterInput: FunctionComponent<FilterInputProps> = ({
    pattern,
    setPattern,
}) => {
    const onFilter = useCallback(
        _debounce((value: string) => {
            setPattern(value);
        }, 500),
        [setPattern]
    );

    return <input type="text" onChange={(e) => onFilter(e.target.value)} />;
};

export default FilterInput;
