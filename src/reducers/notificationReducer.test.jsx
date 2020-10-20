import notificationReducer from './notificationReducer';
import Constants from "../constants";

describe('when notificationReducer', () => {

    test('ERROR_TYPE', () => {
      const initialState = { loader: true };
      const action = { type: Constants.ERROR_TYPE, payload: 'Test message' };
      const result = notificationReducer(initialState, action);
      expect(result.loader).toBeTruthy();
      expect(result.showMessage).toEqual(true);
      expect(result.redirect).toEqual(true);
      expect(result.modalWindow).toEqual(Constants.ERROR);
    });

  test('EDIT_MOVIE_SUCCESS_TYPE', () => {
    const initialState = { loader: true };
    const action = { type: Constants.EDIT_MOVIE_SUCCESS_TYPE, payload: 'Test message' };
    const result = notificationReducer(initialState, action);
    expect(result.loader).toBeTruthy();
    expect(result.showMessage).toEqual(true);
    expect(result.modalWindow).toEqual(Constants.EDIT_SUCCESS);
  });

  test('DELETE_MOVIES_SUCCESS_TYPE', () => {
    const initialState = { loader: true };
    const action = { type: Constants.DELETE_MOVIES_SUCCESS_TYPE, payload: 'Test message' };
    const result = notificationReducer(initialState, action);
    expect(result.loader).toBeTruthy();
    expect(result.showMessage).toEqual(true);
    expect(result.modalWindow).toEqual(Constants.DELETE_SUCCESS);
  });

  test('ADD_MOVIE_SUCCESS_TYPE', () => {
    const initialState = { loader: true };
    const action = { type: Constants.ADD_MOVIE_SUCCESS_TYPE, payload: 'Test message' };
    const result = notificationReducer(initialState, action);
    expect(result.loader).toBeTruthy();
    expect(result.showMessage).toEqual(true);
    expect(result.modalWindow).toEqual(Constants.ADD_SUCCESS);
  });

  test('LOADER_TYPE', () => {
    const initialState = { loader: true };
    const action = { type: Constants.LOADER_TYPE, payload: 'Test message' };
    const result = notificationReducer(initialState, action);
    expect(result.loader).toBeTruthy();
    expect(result.redirect).toEqual(false);
  });

});
