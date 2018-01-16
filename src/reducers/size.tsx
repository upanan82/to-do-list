import { NEW_SIZE } from '../constants/index';
import { SizeStateInt, SizeActionInt } from '../interfaces/index';

let initialSate = {
    active: 0
};

export type Size = (state: SizeStateInt, action: SizeActionInt) => SizeStateInt;

export default function size(state: SizeStateInt = initialSate, action: SizeActionInt): SizeStateInt {
    switch (action.type) {
        case NEW_SIZE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}