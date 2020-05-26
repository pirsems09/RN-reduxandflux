import {
    FAVORITE_CATEGORIES_START,
    FAVORITE_CATEGORIES_SUCCESS,
    FAVORITE_CATEGORIES_FAIL,
    FAVORITE_MARKETS_START,
    FAVORITE_MARKETS_SUCCESS,
    FAVORITE_MARKETS_FAIL,
    FAVORITE_PRODUCTS_START,
    FAVORITE_PRODUCTS_SUCCESS,
    FAVORITE_PRODUCTS_FAIL,
    FAVORITE_POST_START,
    FAVORITE_POST_SUCCESS,
    FAVORITE_POST_FAIL,
    base_url,
    USERID,
} from './types';

import { get, post } from './Api';

export const favoriCategoryList = () => {
    return (dispatch) => {
        get(
            base_url.concat('favorite/categories?userId=', USERID.data),
            dispatch,
            FAVORITE_CATEGORIES_START,
            FAVORITE_CATEGORIES_SUCCESS,
            FAVORITE_CATEGORIES_FAIL
        );
    }
}
export const favoriProductList = () => {
    return (dispatch) => {
        get(
            base_url.concat('favorite/products?userId=', USERID.data),
            dispatch,
            FAVORITE_PRODUCTS_START,
            FAVORITE_PRODUCTS_SUCCESS,
            FAVORITE_PRODUCTS_FAIL
        );
    }
}
export const favoriMarketList = () => {
    return (dispatch) => {
        get(
            base_url.concat('favorite/markets?userId=', USERID.data),
            dispatch,
            FAVORITE_MARKETS_START,
            FAVORITE_MARKETS_SUCCESS,
            FAVORITE_MARKETS_FAIL
        );
    }
}
export const favoriSet = (type, list) => {
    const items = {
        'userId': USERID.data,
        'favoriteType': type,
        'favoriteIds': list
    };
    return (dispatch) => {
        post(
            base_url.concat('favorite'),
            items,
            dispatch,
            FAVORITE_POST_START,
            FAVORITE_POST_SUCCESS,
            FAVORITE_POST_FAIL
        );
    }
}
