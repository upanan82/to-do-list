import * as React from 'react';
import { connect } from 'react-redux';
import { newFilter, NewFilter } from '../actions/filter';
import { StateInt } from '../interfaces/index';

interface Props extends StateProps, DispatchProps {}

interface StateProps {
    listLength: number;
    status: boolean | null;
    activeSize: number;
}

interface DispatchProps {
    editFilter: NewFilter;
}

class Filter extends React.Component<Props, {}> {
    render() {
        const prop = this.props;
        return (
            <div className="btn-group btn-group-justified filter">
                <a
                    href="#all"
                    className={`btn btn-primary ${prop.status === null ? 'selectFilter' : ''}`}
                    onClick={() => {
                        prop.editFilter(null);
                    }}
                >
                    All ({prop.listLength})
                </a>
                <a
                    href="#active"
                    className={`btn btn-primary ${prop.status === false ? 'selectFilter' : ''}`}
                    onClick={() => {
                        prop.editFilter(false);
                    }}
                >
                    Active ({prop.listLength - prop.activeSize})
                </a>
                <a
                    href="#completed"
                    className={`btn btn-primary ${prop.status === true ? 'selectFilter' : ''}`}
                    onClick={() => {
                        prop.editFilter(true);
                    }}
                >
                    Completed ({prop.activeSize})
                </a>
            </div>
        );
    }
}

function mapStateToProps(state: StateInt): StateProps {
    return {
        listLength: state.list.length,
        status: state.filter.status,
        activeSize: state.size.active
    };
}

const mapDispatchToProps = {
    editFilter: newFilter
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Filter);