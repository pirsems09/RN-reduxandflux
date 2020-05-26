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
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  categoryData: null,
  marketData: null,
  productData: null,
  postData: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //
    case FAVORITE_CATEGORIES_START:
      return {
        ...state, loading: true
      };
    case FAVORITE_CATEGORIES_SUCCESS:
      return {
        ...state, loading: false, categoryData: action.payload
      };
    case FAVORITE_CATEGORIES_FAIL:
      return {
        ...state, loading: false,
      };
    //
    case FAVORITE_MARKETS_START:
      return {
        ...state, loading: true
      };
    case FAVORITE_MARKETS_SUCCESS:
      return {
        ...state, loading: false, marketData: action.payload
      };
    case FAVORITE_MARKETS_FAIL:
      return {
        ...state, loading: false,
      };
    //
    case FAVORITE_PRODUCTS_START:
      return {
        ...state, loading: true
      };
    case FAVORITE_PRODUCTS_SUCCESS:
      return {
        ...state, loading: false, productData: action.payload
      };
    case FAVORITE_PRODUCTS_FAIL:
      return {
        ...state, loading: false,
      };
    //
    case FAVORITE_POST_START:
      return {
        ...state, loading: true
      };
    case FAVORITE_POST_SUCCESS:
      return {
        ...state, loading: false, postData: action.payload
      };
    case FAVORITE_POST_FAIL:
      return {
        ...state, loading: false,
      };

    default:
      return state;
  }
};