import {
  MARKET_START,
    MARKET_SUCCESS,
    MARKET_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  marketData: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MARKET_START:
      return {
        ...state, loading: true
      };
    case MARKET_SUCCESS:
      return {
        ...state, loading: false, marketData: action.payload
      };
    case MARKET_FAIL:
      return {
        ...state, loading: false,
      };

    default:
      return state;
  }
};