import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, AddItem } from '../actions/list';
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
    add: AddItem;
}

class Form extends React.Component<Props, {}> {
    private inputVal: HTMLInputElement;
    render() {
        const prop: Props = this.props;
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

function mapStateToProps(state: StateInt): StateProps {
    return {
        testStore: state
    };
}

function mapDispatchToProps(dispatch: Dispatch<object>) {
    return bindActionCreators(
        {
            add: addItem
        },
        dispatch
    );
}

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Form);