import { NEW_FILTER } from '../constants/index';
import { FilterActionInt } from '../interfaces/index';

export type NewFilter = (status: boolean | null) => FilterActionInt;

export function newFilter(status: boolean | null): FilterActionInt {
    return {
        type: NEW_FILTER,
        payload: {
            status: status
        }
    };
}