import { GET_ITEM_DETAIL_DATA } from './ActionConstants';
import ItemDetailPageData from '../data/starterData.json';

export const getItemDetailData = () => {
  return {
    type: GET_ITEM_DETAIL_DATA,
    data: ItemDetailPageData
  };
};
