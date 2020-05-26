import {
    CATEGORY_START,
    CATEGORY_SUCCESS,
    CATEGORY_FAIL,
    base_url
} from './types';

import { get } from './Api';

export const categoryList = (casse) => {

    return (dispatch) => {
        get(
            base_url.concat('category/list?justFavorite=' + (casse)),
            dispatch,
            CATEGORY_START,
            CATEGORY_SUCCESS,
            CATEGORY_FAIL
        );
    }
}
export const userList = () => {

    return (dispatch) => {
        get(
            'https://raw.githubusercontent.com/iranjith4/radius-intern-mobile/master/users.json',
            dispatch,
            CATEGORY_START,
            CATEGORY_SUCCESS,
            CATEGORY_FAIL
        );
    }
}
