import {actionTypes} from './reducers';


export const callSearch = (val) => {
    return {
      type: actionTypes.CALL_SEARCH,
      key:val,
    }
  }