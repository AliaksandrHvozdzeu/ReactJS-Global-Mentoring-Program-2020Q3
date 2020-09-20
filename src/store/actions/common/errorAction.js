import Constants from '../../../constants';

export const error = (err) => ({
  type: Constants.ERROR_TYPE,
  payload: err.message,
  modalWindow: 'error',
  methodType: err.config.method,
  showMessage: true,
});
