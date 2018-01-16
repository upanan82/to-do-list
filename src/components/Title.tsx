import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListStateInt, FilterStateInt, SizeStateInt } from '../interfaces/index';

interface Props extends StateProps, DispatchProps {}

interface StateProps {
    testStore: StateInt;
}

interface StateInt {
    list: Array<ListStateInt>;
    filter: FilterStateInt;
    size: SizeStateInt;
}

interface DispatchProps {}

class Title extends React.Component<Props, {}> {
    render() {
        const prop: Props = this.props;
        return (
            <div>
                <h2>To Do List <small>({prop.testStore.list.length})</small></h2>
            </div>
        );
    }
}

function mapStateToProps(state: StateInt): StateProps {
    return {
        testStore: state
    };
}

function mapDispatchToProps(dispatch: Dispatch<object>) {
    return bindActionCreators(
        {}, 
        dispatch
    );
}

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Title); 