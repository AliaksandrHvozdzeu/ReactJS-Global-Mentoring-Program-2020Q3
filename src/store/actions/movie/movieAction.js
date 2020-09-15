import commonActions from '../common';
import { movieService } from '../../../api';
import Constants from '../../../constants';

export const updateGenres = () => ({
  type: Constants.UPDATE_GENRES_TYPE,
  payload: null,
});

export const moviesLoaded = (payload) => ({
  type: Constants.FETCH_MOVIES_LIST_SUCCESS_TYPE,
  payload,
});

export const loadMovies = () => (dispatch, getState) => {
  dispatch(commonActions.loader(true));
  movieService
    .getMovies({
      query: getState().filters.searchString || '',
      offset: getState().movies.offset || 0,
      sortBy: getState().filters.order,
      genre: getState().filters.genre || '',
    })
    .then((data) => dispatch(moviesLoaded(data)))
    .then(() => dispatch(updateGenres()))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};

export const moviesLoadedDefault = (payload) => ({
  type: Constants.LOAD_MOVIES_DEFAULT_TYPE,
  payload,
});

export const loadMoviesDefault = () => (dispatch, getState) => {
  movieService
    .getMovies({
      query: getState().filters.searchString || '',
      offset: getState().movies.offset || 0,
      sortBy: getState().filters.order,
      genre: getState().filters.genre || '',
    })
    .then((data) => dispatch(moviesLoadedDefault(data)))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};

export const deleteMovieFromStore = (payload) => ({
  type: Constants.DELETE_MOVIES_SUCCESS_TYPE,
  payload,
});

export const deleteMovie = (details) => (dispatch) => {
  const movieIdForDeletion = details.id;
  dispatch(commonActions.loader(true));
  movieService
    .deleteMovie(movieIdForDeletion)
    .then(() => {
      dispatch(deleteMovieFromStore(movieIdForDeletion));
    })
    .catch((err) => commonActions.error(err.message))
    .finally(() => dispatch(commonActions.loader(false)));
};

export const addMovieInStore = (data) => ({
  type: Constants.ADD_MOVIE_SUCCESS_TYPE,
  payload: data,
});

export const addMovie = (movie) => (dispatch) => {
  dispatch(commonActions.loader(true));
  movieService
    .addMovie(movie)
    .then((newMovie) => {
      dispatch(addMovieInStore(newMovie));
    })
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};

export const editMovieInStore = (data) => ({
  type: Constants.EDIT_MOVIE_SUCCESS_TYPE,
  payload: data,
});

export const editMovie = (movie) => (dispatch) => {
  dispatch(commonActions.loader(true));
  movieService
    .editMovie(movie)
    .then((updatedMovie) => {
      dispatch(editMovieInStore(updatedMovie));
    })
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};

export const getMovieBySearchString = (data) => ({
  type: Constants.LOAD_MOVIES_BY_TITLE_TYPE,
  payload: data,
});

export const getMovieByTitle = (searchString) => (dispatch) => {
  movieService
    .getMovieBySearchString(searchString)
    .then((data) => dispatch(getMovieBySearchString(data)))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};

export const filteredMovies = (payload) => ({
  type: Constants.SET_FILTERED_RESULTS_TYPE,
  payload,
});

export const onClearSearch = (data) => ({
  type: Constants.CLEAR_SEARCH_INPUT_TYPE,
  payload: data,
});

export const loadMoviesAfterCLearSearch = () => (dispatch, getState) => {
  dispatch(commonActions.loader(true));
  movieService
    .getMovies({
      query: getState().filters.searchString || '',
      offset: getState().movies.offset || 0,
      sortBy: getState().filters.order,
      genre: getState().filters.genre || '',
    })
    .then((data) => dispatch(onClearSearch(data)))
    .catch((err) => dispatch(commonActions.error(err)))
    .finally(() => dispatch(dispatch(commonActions.loader(false))));
};
