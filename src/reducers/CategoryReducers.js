import {
  CATEGORY_START,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  categoryData: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY_START:
      return {
        ...state, loading: true
      };
    case CATEGORY_SUCCESS:
      return {
        ...state, loading: false, categoryData: action.payload
      };
    case CATEGORY_FAIL:
      return {
        ...state, loading: false,
      };

    default:
      return state;
  }
};