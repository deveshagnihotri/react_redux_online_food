import { GET_ITEM_DETAIL_DATA } from '../actions/ActionConstants';

const INTIAL_STATE = {
  starterData: {},
  isStarterLoading: true
};

export default function itemDetail(state = INTIAL_STATE, action) {
  console.log('reducer', action);
  switch (action.type) {
    case GET_ITEM_DETAIL_DATA:
      return {
        ...state,
        starterData: action.data,
        isStarterLoading: false
      };
    default:
      return INTIAL_STATE;
  }
}
