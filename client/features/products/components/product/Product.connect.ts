import { connect, DefaultRootState } from 'react-redux';
import Component from './Product';
import { deleteProduct } from '../../slice';

interface OwnProps {
    id: string;
    className: string;
}

const mapStateToProps = (state: DefaultRootState, ownProps: OwnProps) => ({
    product: state.products.products[ownProps.id],
    imageUrl: `${state.config.imagesLocation}/${
        state.products.products[ownProps.id].fileName
    }`,
});

const mapDispatchToProps = {
    deleteProduct,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export type ProductProps = OwnProps & StateProps & DispatchProps;

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Component);
