import {
  PAYROLLS_START,
  PAYROLLS_SUCCESS,
  PAYROLLS_FAILD,
  LEAVES_START,
  LEAVES_SUCCESS,
  LEAVES_FAILD,
  ANNUALS_START,
  ANNUALS_SUCCESS,
  ANNUALS_FAILD,
  CHANGE_HOME_LEAVE,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  payrollsData: null,
  homeleavesData: null,
  annualsData: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PAYROLLS_START:
      return {
        ...state, loading: true
      };
    case PAYROLLS_SUCCESS:
      return {
        //aslında loading false olmalı ama home da 3 servis çalıştırğı için sadece bir serviste false yapacağım
        ...state, loading: false, payrollsData: action.payload
      };
    case PAYROLLS_FAILD:
      return {
        ...state, loading: false,
      };

    // case CHANGE_HOME_LEAVE:

    //   console.log('global.SilinenID', global.SilinenID)
    //   const dataCancel = state.homeleavesData;

    //   console.log('date_chance pre', dataCancel)
    //   dataCancel.Data.splice(dataCancel.Data.findIndex((i) => i.Id === global.SilinenID), 1);
    //   console.log('date_chance pro', dataCancel)

    //   state.homeleavesData = dataCancel
    //   return {
    //     ...state
    //   };

    default:
      return state;
  }
};