import { NEW_SIZE } from '../constants/index';

export function newSize(arg: number): object {
    return {
        type: NEW_SIZE,
        payload: {
            active: arg
        }
    };
}