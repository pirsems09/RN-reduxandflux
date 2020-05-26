import {
    PRODUCT_START,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
    PRODUCT_ADD_START,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_ADD_FAIL,
    base_url
} from './types';

import { get } from './Api';

// burada ki parametreleri base_url e ekleme yapmalıyız
export const productList = (query) => {

    return (dispatch) => {
        get(
            base_url.concat('product/list' + query),
            dispatch,
            PRODUCT_START,
            PRODUCT_SUCCESS,
            PRODUCT_FAIL,
        );
    }
}
// burada ki parametreleri base_url e ekleme yapmalıyız
export const productListAdd = (queryy) => {

    return (dispatch) => {
        get(
            base_url.concat('product/list' + queryy),
            dispatch,
            PRODUCT_ADD_START,
            PRODUCT_ADD_SUCCESS,
            PRODUCT_ADD_FAIL,
        );
    }
}
