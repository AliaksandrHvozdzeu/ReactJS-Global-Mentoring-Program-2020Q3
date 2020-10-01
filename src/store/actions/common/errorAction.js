import Constants from '../../../constants';

// eslint-disable-next-line import/prefer-default-export
export const error = (err) => ({
  type: Constants.ERROR_TYPE,
  payload: err.message,
  modalWindow: 'error',
  methodType: err.config.method,
  showMessage: true,
  redirect: true,
});
