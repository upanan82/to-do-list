import { NEW_FILTER } from '../constants/index';
import { FilterStateInt, FilterActionInt } from '../interfaces/index';

let initialSate: FilterStateInt = {
    status: null
};

export type Filter = (state: FilterStateInt, action: FilterActionInt) => FilterStateInt;

export default function filter(state: FilterStateInt = initialSate, action: FilterActionInt): FilterStateInt {
    switch (action.type) {
        case NEW_FILTER: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}