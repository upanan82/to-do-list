import * as React from 'react';
import { connect } from 'react-redux';
import { DONE_ITEM, REMOVE_ITEM } from '../constants/index';
import { ListStateInt, StateInt } from '../interfaces/index';
import { editList, EditList } from '../actions/list';
import { newSize, NewSize } from '../actions/size';

interface Props extends StateProps, DispatchProps {}

interface StateProps {
    list: ListStateInt[];
    status: boolean | null;
    activeSize: number;
}

interface DispatchProps {
    removeEl: EditList;
    done: EditList;
    editSize: NewSize;
}

class List extends React.Component<Props, {}> {
    render() {
        const prop = this.props;
        let newList: ListStateInt[] = prop.list.filter((el) => {
            if (prop.status === null) {
                return el;
            }
            if (el.status !== prop.status) {
                return el;
            }
            return;
        });
        if (!newList.length) {
            return (<ul className="list-group todoList text-center someText">No Tasks!</ul>);
        }
        let todoList = newList.map((el, ind) => {
            let arg: number = prop.activeSize;
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
        });
        return (<ul className="list-group todoList">{todoList}</ul>);
    }
}

function mapStateToProps(state: StateInt): StateProps {
    return {
        list: state.list,
        status: state.filter.status,
        activeSize: state.size.active
    };
}

const mapDispatchToProps = {
    removeEl: editList,
    done: editList,
    editSize: newSize
};

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(List);