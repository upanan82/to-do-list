import { combineReducers } from 'redux';

import list, { List } from './list';
import filter, { Filter } from './filter';
import size, { Size } from './size';

interface StoreInt {
    list: List;
    filter: Filter;
    size: Size;
}

export default combineReducers<StoreInt>({
    list: list,
    filter: filter,
    size: size
});