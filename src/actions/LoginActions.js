
import {
    PAYROLLS_START,
    PAYROLLS_SUCCESS,
    PAYROLLS_FAILD,
} from './types';

import { get } from './Api';


export const payrollsGet = (id, token) => {
    return (dispatch) => {
        get(
            "https://....".concat(id),
            token,
            0,
            dispatch,
            PAYROLLS_START,
            PAYROLLS_SUCCESS,
            PAYROLLS_FAILD
        );
    }
}

// export const changeLeaveCount = () => {
//     return (dispatch) => {  dispatch({ type: CHANGE_HOME_LEAVE }); }
// }
