import { NEW_SIZE } from '../constants/index';
import { SizeActionInt } from '../interfaces/index';

export type NewSize = (arg: number) => SizeActionInt;

export function newSize(arg: number): SizeActionInt {
    return {
        type: NEW_SIZE,
        payload: {
            active: arg
        }
    };
}