import { NEW_FILTER } from '../constants/index';

export function newFilter(status: boolean): object {
    return {
        type: NEW_FILTER,
        payload: {
            status: status
        }
    };
}