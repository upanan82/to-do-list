import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/list';

class Form extends React.Component {
    private inputVal: HTMLInputElement;
    render() {
        const prop: any = this.props;
        return (
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (this.inputVal.value.trim() === '') {
                        return;
                    }
                    prop.add(this.inputVal.value, Date.now());
                    this.inputVal.value = '';
                }}
            >
                <input
                    className="form-control"
                    placeholder="Write a new task..."
                    ref={(ref: HTMLInputElement) => {
                        this.inputVal = ref;
                    }}
                />
                <br />
            </form>
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
        {
            add: addItem
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);