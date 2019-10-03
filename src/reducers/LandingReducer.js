import { GET_HOME_PAGE_DATA } from '../actions/ActionConstants';

const INTIAL_STATE = {
  data: {},
  isLoading: true
};

export default function landing(state = INTIAL_STATE, action) {
  console.log('reducer', action);
  switch (action.type) {
    case GET_HOME_PAGE_DATA:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    default:
      return INTIAL_STATE;
  }
}
