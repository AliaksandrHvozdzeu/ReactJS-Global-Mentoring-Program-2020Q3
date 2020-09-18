import Constants from '../../../constants';

// eslint-disable-next-line import/prefer-default-export
export const resetForm = (formType) => ({
  type: Constants.RESET_TYPE,
  formType
});
