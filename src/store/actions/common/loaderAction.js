import Constants from '../../../constants';

// eslint-disable-next-line import/prefer-default-export
export const loader = (payload) => ({
  type: Constants.LOADER_TYPE,
  payload
});


