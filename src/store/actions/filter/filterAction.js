import Constants from '../../../constants';

export const filterByGenre = (payload) => ({
  type: Constants.FILTER_GENRE_TYPE,
  payload,
});

export const changeOrder = (payload) => ({
  type: Constants.FILTER_ORDER_TYPE,
  payload,
});
