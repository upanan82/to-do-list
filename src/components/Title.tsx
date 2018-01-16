import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

class Title extends React.Component {
    render() {
        const prop: any = this.props;
        return (
            <div>
                <h2>To Do List <small>({prop.testStore.list.length})</small></h2>
            </div>
        );
    }
}

function mapStateToProps(state: object): object {
    return {
        testStore: state
    };
}

function mapDispatchToProps(dispatch: Dispatch<object>): object {
    return bindActionCreators(
        {}, 
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Title); 