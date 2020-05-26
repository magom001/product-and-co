import { connect, DefaultRootState } from 'react-redux';
import Component from './Product';

interface OwnProps {
    id: string;
    className: string;
}

const mapStateToProps = (state: DefaultRootState, ownProps: OwnProps) => ({
    product: state.products.products[ownProps.id],
});

type StateProps = ReturnType<typeof mapStateToProps>;

export type ProductProps = OwnProps & StateProps;

export default connect<StateProps, {}, OwnProps>(mapStateToProps)(Component);
