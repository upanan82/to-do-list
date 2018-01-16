import { combineReducers } from 'redux';

import list from './list';
import filter from './filter';
import size from './size';

export default combineReducers({
    list: list,
    filter: filter,
    size: size
});