import { connect, DefaultRootState } from 'react-redux';
import Component from './ProductList';
import { productsSelector } from '../../slice';

const mapStateToProps = (state: DefaultRootState) => ({
    products: productsSelector(state),
});

type MapState = ReturnType<typeof mapStateToProps>;
interface OwnProps {
    filter?: string;
}

export type ProductListProps = MapState & OwnProps;

export default connect<MapState>(mapStateToProps)(Component);
