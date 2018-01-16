import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newFilter, NewFilter } from '../actions/filter';
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

interface DispatchProps {
    editFilter: NewFilter;
}

class Filter extends React.Component<Props, {}> {
    render() {
        const prop: Props = this.props;
        return (
            <div className="btn-group btn-group-justified filter">
                <a
                    href="#all"
                    className={`btn btn-primary ${prop.testStore.filter.status === null ? 'selectFilter' : ''}`}
                    onClick={() => {
                        prop.editFilter(null);
                    }}
                >
                    All ({prop.testStore.list.length})
                </a>
                <a
                    href="#active"
                    className={`btn btn-primary ${prop.testStore.filter.status === false ? 'selectFilter' : ''}`}
                    onClick={() => {
                        prop.editFilter(false);
                    }}
                >
                    Active ({prop.testStore.list.length - prop.testStore.size.active})
                </a>
                <a
                    href="#completed"
                    className={`btn btn-primary ${prop.testStore.filter.status === true ? 'selectFilter' : ''}`}
                    onClick={() => {
                        prop.editFilter(true);
                    }}
                >
                    Completed ({prop.testStore.size.active})
                </a>
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
        {
            editFilter: newFilter
        },
        dispatch
    );
}

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Filter);