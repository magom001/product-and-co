import React, {
    FunctionComponent,
    useCallback,
    useRef,
    useEffect,
} from 'react';
import ReactDOM from 'react-dom';

import classes from './style.css';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
    children,
    visible,
    onClose,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const onOutsideClick = useCallback(
        (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (event.target === modalRef.current) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (visible) {
            document.body.classList.add('modal');
        } else {
            document.body.classList.remove('modal');
        }
    }, [visible]);

    if (!visible) {
        return null;
    }

    return ReactDOM.createPortal(
        <div ref={modalRef} className={classes.Modal} onClick={onOutsideClick}>
            <div className={classes.Content}>{children}</div>
        </div>,
        document.body
    );
};

export default Modal;
