import {
    USER_CREATE_START,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    base_url
} from './types';

import { post } from './Api';

export const userCreate = (oneSignalId, email, telephone) => {
    const items = {
        'phoneId': oneSignalId,
        'email': email,
        'telephone': telephone,
    };
    return (dispatch) => {
        post(
            base_url.concat('user/create'),
            items,
            dispatch,
            USER_CREATE_START,
            USER_CREATE_SUCCESS,
            USER_CREATE_FAIL
        );
    }
}
