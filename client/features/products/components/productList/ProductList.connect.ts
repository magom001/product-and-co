import { connect, DefaultRootState } from 'react-redux';
import Component from './ProductList';

const mapStateToProps = (state: DefaultRootState) => ({
    productIds: Object.keys(state.products.products),
});

type MapState = ReturnType<typeof mapStateToProps>;
export type ProductListProps = MapState;

export default connect<MapState>(mapStateToProps)(Component);
