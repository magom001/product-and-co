import { connect, DefaultRootState } from 'react-redux';
import Component from './NotificationModal';
import { clearMessage } from '../../slice';

const mapStateToProps = (state: DefaultRootState) => ({
    isVisible: Boolean(state.notification.message),
    message: state.notification.message,
});

const mapDispatchToProps = {
    onClose: clearMessage,
};

type MapProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export type NotificationModalProps = MapProps & DispatchProps;

export default connect<MapProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Component);
