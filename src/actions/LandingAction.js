import { GET_HOME_PAGE_DATA } from './ActionConstants';
import homePageData from '../data/landingPageData.json';

console.log(homePageData);

export const getHomePageData = () => {
  return {
    type: GET_HOME_PAGE_DATA,
    data: homePageData
  };
};
