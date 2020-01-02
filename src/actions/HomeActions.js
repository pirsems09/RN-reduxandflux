
import {
    PAYROLLS_START,
    PAYROLLS_SUCCESS,
    PAYROLLS_FAILD,
} from './types';

import { get } from './Api';

export const payrollsGet = (id, token) => {
    return (dispatch) => {
        get(
            "".data.concat(id),
            token,
            0,
            dispatch,
            PAYROLLS_START,
            PAYROLLS_SUCCESS,
            PAYROLLS_FAILD
        );
    }
}
