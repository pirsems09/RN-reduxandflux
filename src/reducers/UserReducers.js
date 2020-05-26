import {
  USER_CREATE_START,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  FIREBASE_START,
  FIREBASE_SUCCESS,
  FIREBASE_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  userData: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_CREATE_START:
      return {
        ...state, loading: true
      };
    case USER_CREATE_SUCCESS:
      return {
        ...state, loading: false, userData: action.payload
      };
    case USER_CREATE_FAIL:
      return {
        ...state, loading: false,
      };
    case FIREBASE_START:
      return {
        ...state, loading: true
      };
    case FIREBASE_SUCCESS:
      return {
        ...state, loading: false
      };
    case FIREBASE_FAIL:
      return {
        ...state, loading: false,
      };

    default:
      return state;
  }
};