import React, { FunctionComponent, useCallback } from 'react';
import { Modal, Button } from '../../../../components';
import { NotificationModalProps } from './NotificationModal.connect';

import classes from './style.css';

const NotificationModal: FunctionComponent<NotificationModalProps> = ({
    message,
    isVisible,
    onClose,
}) => {
    const closeModal = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <Modal visible={isVisible} onClose={closeModal}>
            <div className={classes.Container}>
                <span className={classes.Message}>{message}</span>
                <Button theme="action" onClick={closeModal}>
                    <span className={classes.ButtonText}>Ok</span>
                </Button>
            </div>
        </Modal>
    );
};

export default NotificationModal;
