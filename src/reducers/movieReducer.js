import Constants from '../constants';

const initialState = {
  movies: [],
  filteredResults: [],
  preview: null,
  offset: 0,
  genres: ['All'],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FETCH_MOVIES_LIST_SUCCESS_TYPE: {
      const { movies, total } = action.payload;
      const newMovieList = [...state.movies, ...movies];
      const offset = state.offset + movies.length;
      return { ...state, movies: newMovieList, total, offset };
    }
    case Constants.LOAD_MOVIES_DEFAULT_TYPE: {
      const { movies } = action.payload;
      const newMovieList = [...state.movies, ...movies];
      return { ...state, movies: newMovieList };
    }
    case Constants.LOAD_MOVIES_BY_TITLE_TYPE: {
      const { totalAmount } = action.payload.data;
      const offset = state.offset + action.payload.data.length;
      const findMovies = action.payload.data.data;
      return { ...state, movies: findMovies, totalAmount, offset };
    }
    case Constants.DELETE_MOVIES_SUCCESS_TYPE: {
      const result = state.movies.filter((movie) => movie.id !== action.payload);
      return { ...state, movies: result, offset: state.offset - 1 };
    }
    case Constants.UPDATE_GENRES_TYPE: {
      console.log(state.movies);
      const newGenres = new Set(state.movies.map((movie) => movie.genres).flat());
      return { ...state, genres: ['All', ...newGenres] };
    }
    case Constants.EDIT_MOVIE_SUCCESS_TYPE: {
      const updatedMovie = action.payload;
      const movies = state.movies.filter((movie) => movie.id !== updatedMovie.id);
      return { ...state, movies: [...movies, updatedMovie] };
    }
    case Constants.ADD_MOVIE_SUCCESS_TYPE: {
      const newMovie = action.payload;
      return { ...state, movies: [...state.movies, newMovie] };
    }
    case Constants.SET_FILTERED_RESULTS_TYPE: {
      return { ...state, filteredResults: action.payload };
    }
    case Constants.CLEAR_SEARCH_INPUT_TYPE: {
      return { ...state, movies: [], genres: ['All'] };
    }
    case Constants.MOVIE_PREVIEW: {
      return { ...state, preview: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default movieReducer;
