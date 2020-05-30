import { connect, DefaultRootState } from 'react-redux';
import Component from './FilterInput';
import { setPattern, resetPattern } from '../../slice';

const mapStateToProps = (state: DefaultRootState) => ({
    pattern: state.filter.pattern,
});

const mapDispatchToProps = {
    resetPattern,
    setPattern,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
interface OwnProps {
    className?: string;
}

export type FilterInputProps = StateProps & DispatchProps & OwnProps;

export default connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Component);
