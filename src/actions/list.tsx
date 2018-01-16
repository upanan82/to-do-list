import { ADD_ITEM } from '../constants/index';
import { ListActionInt } from '../interfaces/index';

export type EditList = (actionType: string, id: number) => ListActionInt;
export type AddItem = (val: string, size: number) => ListActionInt;

export function editList(actionType: string, id: number): ListActionInt {
    return {
        type: actionType,
        payload: {
            key: id
        }
    };
}

export function addItem(val: string, size: number): ListActionInt {
    return {
        type: ADD_ITEM,
        payload: {
            status: true,
            text: val,
            key: size
        }
    };
}