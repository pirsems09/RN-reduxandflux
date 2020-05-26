
import {
    HOME_START,
    HOME_SUCCESS,
    HOME_FAIL,
    base_url
} from './types';

import { get } from './Api';

export const homeList = () => {
    return (dispatch) => {
        get(
            base_url.concat('home?userId=', USERID.data),
            dispatch,
            HOME_START,
            HOME_SUCCESS,
            HOME_FAIL
        );
    }
}
