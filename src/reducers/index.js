import { combineReducers } from 'redux';
import HomeReducers from './HomeReducers';

export default combineReducers({
    homeResponse: HomeReducers,
})