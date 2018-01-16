import { ADD_ITEM, DONE_ITEM, REMOVE_ITEM } from '../constants/index';
import { ListActionInt, ListStateInt } from '../interfaces/index';

let initialSate: Array<ListStateInt> = [];

export default function list(state: Array<ListStateInt> = initialSate, action: ListActionInt): Array<ListStateInt> {
    switch (action.type) {
        case ADD_ITEM: {
            return [ ...state, action.payload ];
        }
        case DONE_ITEM: {
            return state.filter((el, ind) => {
                el.key === action.payload.id ? el.status = !el.status : el.status = el.status; 
                return el;
            });
        }
        case REMOVE_ITEM: {
            return state.filter((el, ind) => {
                if (el.key !== action.payload.id) {
                    return el;
                }
                return;
            });
        }
        default: {
            return state;
        }
    }
}