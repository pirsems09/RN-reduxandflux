import {
  PRODUCT_START,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_ADD_START,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  productData: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_START:
      return {
        ...state, loading: true
      };
    case PRODUCT_SUCCESS:
      return {
        ...state, loading: false, productData: action.payload
      };
    case PRODUCT_FAIL:
      return {
        ...state, loading: false,
      };
    case PRODUCT_ADD_START:
      return {
        ...state, loading: true
      };
    case PRODUCT_ADD_SUCCESS:

      const data = state.productData

      action.payload.map((value) => {
        data.push(value)
      })

      console.log('önemli', data)

      state.productData.data = data
      return {
        ...state
      };

    case PRODUCT_ADD_FAIL:
      return {
        ...state, loading: false,
      };

    default:
      return state;
  }
};