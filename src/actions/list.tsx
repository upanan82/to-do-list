import { ADD_ITEM } from '../constants/index';

export function editList(actionType: string, id: number): object {
    return {
        type: actionType,
        payload: {
            id: id
        }
    };
}

export function addItem(val: string, size: number): object {
    return {
        type: ADD_ITEM,
        payload: {
            status: true,
            text: val,
            key: size
        }
    };
}