import * as React from 'react';
import { connect } from 'react-redux';
import { addItem, AddItem } from '../actions/list';
import { StateInt } from '../interfaces/index';

interface Props extends StateProps, DispatchProps {}

interface StateProps {}

interface DispatchProps {
    add: AddItem;
}

class Form extends React.Component<Props, {}> {
    private inputVal: HTMLInputElement;
    render() {
        const prop = this.props;
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
    return {};
}

const mapDispatchToProps = {
    add: addItem
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(Form);