import * as React from 'react';
import { connect } from 'react-redux';
import { StateInt } from '../interfaces/index';

interface Props extends StateProps, DispatchProps {}

interface StateProps {
    listLength: number;
}

interface DispatchProps {}

class Title extends React.Component<Props, {}> {
    render() {
        const prop = this.props;
        return (
            <div>
                <h2>To Do List <small>({prop.listLength})</small></h2>
            </div>
        );
    }
}

function mapStateToProps(state: StateInt): StateProps {
    return {
        listLength: state.list.length
    };
}

const mapDispatchToProps = {};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Title); 