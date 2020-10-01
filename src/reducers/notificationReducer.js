import Constants from '../constants';

const initialState = {
  loader: false,
  modalWindow: null,
  showMessage: false,
  redirect: false,
};

const notificationReducer = (state = initialState, action) => {

  switch (action.type) {
    case Constants.LOADER_TYPE: {
      return {
        ...state,
        loader: action.payload,
        redirect: false,
      };
    }
    case Constants.ERROR_TYPE: {
      return {
        ...state,
        modalWindow: Constants.ERROR,
        methodType: action.methodType,
        showMessage: true,
        redirect: true,
      };
    }
    case Constants.EDIT_MOVIE_SUCCESS_TYPE: {
      return {
        ...state,
        modalWindow: Constants.EDIT_SUCCESS,
        showMessage: true,
      };
    }
    case Constants.DELETE_MOVIES_SUCCESS_TYPE: {
      return {
        ...state,
        modalWindow: Constants.DELETE_SUCCESS,
        showMessage: true,
      };
    }
    case Constants.ADD_MOVIE_SUCCESS_TYPE: {
      return {
        ...state,
        modalWindow: Constants.ADD_SUCCESS,
        showMessage: true,
      };
    }
    default: {
      return {
        ...state,
        modalWindow: null,
        methodType: null,
        showMessage: false,
        redirect: false,
      };
    }
  }

};

export default notificationReducer;
