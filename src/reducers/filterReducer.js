import Constants from '../constants';

const initialState = {
  genre: null,
  order: 'release_date',
  searchString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.FILTER_GENRE_TYPE: {
      return { ...state, genre: action.payload };
    }
    case Constants.FILTER_ORDER_TYPE: {
      return { ...state, order: action.payload };
    }
    default:
      return state;
  }
};
