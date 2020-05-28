import { connect } from 'react-redux';
import Component from './DropzoneContainer';
import { addProduct } from '../../../products/slice';

const mapDispatchToProps = {
    addProduct,
};

type DispatchProps = typeof mapDispatchToProps;

export type DropzoneProps = DispatchProps;

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(Component);
