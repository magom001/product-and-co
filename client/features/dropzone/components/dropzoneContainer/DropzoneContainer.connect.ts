import { connect } from 'react-redux';
import Component from './DropzoneContainer';
import { addProduct } from '../../../products/slice';
import { dispatchNotification } from '../../../notification/slice';

const mapDispatchToProps = {
    addProduct,
    dispatchNotification,
};

type DispatchProps = typeof mapDispatchToProps;

export type DropzoneProps = DispatchProps;

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(Component);
