import {
    MARKET_START,
    MARKET_SUCCESS,
    MARKET_FAIL,
    base_url,
    base_url_demo
} from './types';

import { get } from './Api';

export const marketList = () => {
    return (dispatch) => {
        get(
            base_url.concat('market/list'),
            dispatch,
            MARKET_START,
            MARKET_SUCCESS,
            MARKET_FAIL
        );
    }
}

export const marketList_demo = () => {
    return (dispatch) => {
        get(
            base_url_demo.concat('attendanceinformation/ffe62f1d-ac94-4fc9-b4a1-f3eb62130ca8'),
            dispatch,
            MARKET_START,
            MARKET_SUCCESS,
            MARKET_FAIL
        );
    }
}
