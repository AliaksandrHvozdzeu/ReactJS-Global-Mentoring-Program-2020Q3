import Constants from '../../../constants';

export const resetForm = (formType) => ({
  type: Constants.RESET_TYPE,
  formType
});
