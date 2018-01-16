import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { DONE_ITEM, REMOVE_ITEM } from '../constants/index';
import { ListStateInt, FilterStateInt, SizeStateInt } from '../interfaces/index';
import { bindActionCreators } from 'redux';
import { editList, EditList } from '../actions/list';
import { newSize, NewSize } from '../actions/size';

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
    removeEl: EditList;
    done: EditList;
    editSize: NewSize;
}

class List extends React.Component<Props, {}> {
    render() {
        const prop: Props = this.props;
        let newList: Array<ListStateInt> = prop.testStore.list.filter((el: ListStateInt) => {
            if (prop.testStore.filter.status === null) {
                return el;
            }
            if (el.status !== prop.testStore.filter.status) {
                return el;
            }
            return;
        });
        if (!newList.length) {
            return (<ul className="list-group todoList text-center someText">No Tasks!</ul>);
        }
        let todoList: Element[] = newList.map((el: ListStateInt, ind: number): JSX.Element | Element => {
            let arg: number = prop.testStore.size.active;
            return (
                <li className={`list-group-item listStyle ${el.status === false ? 'done' : ''}`} key={ind}>
                    <span
                        className="glyphicon glyphicon-ok okBut"
                        aria-hidden="true"
                        onClick={() => {
                            prop.done(DONE_ITEM, el.key);
                            if (el.status === false) {
                                prop.editSize(arg + 1);
                                return;
                            }
                            prop.editSize(arg - 1);
                        }}
                    />
                    <p className="text">{el.text}</p>
                    <span
                        className="glyphicon glyphicon-remove removeBut"
                        aria-hidden="true"
                        onClick={() => {
                            if (el.status === false) {
                                prop.editSize(arg - 1);
                            }
                            prop.removeEl(REMOVE_ITEM, el.key);
                        }}
                    />
                </li>
            );
        }) as Element[];
        return (<ul className="list-group todoList">{todoList}</ul>);
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
            removeEl: editList,
            done: editList,
            editSize: newSize
        },
        dispatch
    );
}

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(List);