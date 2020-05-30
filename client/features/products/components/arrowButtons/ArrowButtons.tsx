import React, {
    FunctionComponent,
    RefObject,
    useEffect,
    useState,
} from 'react';
import cn from 'classnames';
import debounce from 'lodash/debounce';

import classes from './style.css';
import { Icon } from '../../../../components';

export enum Direction {
    left,
    right,
}

const shouldShowLeftArrowButton = (element: HTMLElement) => {
    return element.scrollLeft === 0;
};

const shouldShowRightArrowButton = (element: HTMLElement) => {
    return element.scrollLeft >= element.scrollWidth - element.clientWidth;
};

export interface ArrowButtonsRef {
    containerRef: RefObject<HTMLElement>;
    className?: string;
}

const ArrowButtons: FunctionComponent<ArrowButtonsRef> = ({
    className,
    containerRef,
}) => {
    const [leftButtonHidden, setLeftButtonHidden] = useState<boolean>(true);
    const [rightButtonHidden, setRightButtonHidden] = useState<boolean>(true);

    const onArrowButtonClick = (direction: Direction) => {
        if (containerRef.current) {
            if (direction === Direction.left) {
                containerRef.current.scrollBy({
                    left: -containerRef.current.clientWidth,
                    behavior: 'smooth',
                });
            } else {
                containerRef.current.scrollBy({
                    left: containerRef.current.clientWidth,
                    behavior: 'smooth',
                });
            }
        }
    };

    useEffect(() => {
        const onScrollHandler = () => {
            if (containerRef.current) {
                if (shouldShowLeftArrowButton(containerRef.current)) {
                    setLeftButtonHidden(true);
                } else {
                    setLeftButtonHidden(false);
                }

                if (shouldShowRightArrowButton(containerRef.current)) {
                    setRightButtonHidden(true);
                } else {
                    setRightButtonHidden(false);
                }
            }
        };

        // Debounce allows to reduce rerenders
        const debouncedScrollHandler = debounce(onScrollHandler, 50);

        if (containerRef.current) {
            if (!shouldShowRightArrowButton(containerRef.current)) {
                setRightButtonHidden(false);
            }

            if (!shouldShowLeftArrowButton(containerRef.current)) {
                setLeftButtonHidden(false);
            }

            containerRef.current.addEventListener(
                'scroll',
                debouncedScrollHandler
            );
        }

        return () => {
            containerRef.current?.removeEventListener(
                'scroll',
                debouncedScrollHandler
            );
        };
    }, [containerRef.current]);

    return (
        <div className={cn(classes.Container, className)}>
            <div
                onClick={() => onArrowButtonClick(Direction.left)}
                className={cn(classes.Button, classes.ButtonLeft, {
                    [classes.Hidden]: leftButtonHidden,
                })}
            >
                <Icon type="arrow" className={classes.Icon} size="l" />
            </div>
            <div
                onClick={() => onArrowButtonClick(Direction.right)}
                className={cn(classes.Button, {
                    [classes.Hidden]: rightButtonHidden,
                })}
            >
                <Icon type="arrow" className={classes.Icon} size="l" />
            </div>
        </div>
    );
};

export default ArrowButtons;
