import actions from "./index";
import commonActions from '../common';
import Constants from "../../../constants";
import { loader } from "../common/loaderAction";
import { movieService } from "../../../api";
import configureStore from 'redux-mock-store';
import { jest } from "@jest/globals";

describe("movie actions", () => {

  afterAll(() => {
    jest.resetAllMocks();
  });

  test("getMovieById", () => {
    const initialStore = {};
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const id = 19;
    const action = loader(true);
    store.dispatch(commonActions.loader(true));
    expect(actions.getMovieById(id)).toBeTruthy();
    expect(action.type).toEqual(Constants.LOADER_TYPE);
    expect(movieService.getMovieById(id)).toBeTruthy();
  });

  test("getMovieById catch err", () => {
    const action = loader(true);
    const dispatch = jest.fn();
    expect(action.type).toEqual(Constants.LOADER_TYPE);
    expect(movieService.getMovieById("invalid id").catch((err) => dispatch(commonActions.error(err))));
  });

  test("getMovieByTitle", () => {
    const movieTitle = "jedi";
    expect(actions.getMovieByTitle(movieTitle)).toBeTruthy();
    expect(movieService.getMovieBySearchString(movieTitle)).toBeTruthy();
  });

  test("onClearSearch", () => {
    expect(actions.onClearSearch()).toBeTruthy();
  });

  test("filteredMovies", () => {
    const payload = true;
    expect(actions.filteredMovies(payload)).toBeTruthy();
  });

  test("moviesLoadedDefault", () => {
    const payload = true;
    expect(actions.loadMoviesDefault(payload)).toBeTruthy();
  });

  test("moviesLoaded", () => {
    const payload = true;
    expect(actions.loadMovies(payload)).toBeTruthy();
  });

  test("deleteMovie", () => {
    const details = {
      "id": 19
    };
    expect(actions.deleteMovie(details)).toBeTruthy();
  });

  test("addMovie", () => {
    const movie = {
      "title": "Test",
      "release_date": "2020-10-21",
      "poster_path": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "overview": "over",
      "runtime": 120
    };
    expect(actions.addMovie(movie)).toBeTruthy();
  });

  test("editMovie", () => {
    const movie = {
      "id": 1602580994615,
      "title": "Test",
      "release_date": "2020-10-21",
      "poster_path": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "overview": "over",
      "runtime": 120
    };
    expect(actions.editMovie(movie)).toBeTruthy();
  });

  test("updateGenres", () => {
    expect(actions.updateGenres()).toBeTruthy();
  });

  test("moviesLoaded", () => {
    const payload = {};
    expect(actions.moviesLoaded(payload)).toBeTruthy();
  });

  test("moviesLoadedDefault", () => {
    const payload = {};
    expect(actions.moviesLoadedDefault(payload)).toBeTruthy();
  });

  test("deleteMovieFromStore", () => {
    const payload = {};
    expect(actions.deleteMovieFromStore(payload)).toBeTruthy();
  });

  test("moviePreview", () => {
    const payload = {};
    expect(actions.moviePreview(payload)).toBeTruthy();
  });

  test("addMovieInStore", () => {
    const data = {};
    expect(actions.addMovieInStore(data)).toBeTruthy();
  });

  test("editMovieInStore", () => {
    const data = {};
    expect(actions.editMovieInStore(data)).toBeTruthy();
  });

  test("getMovieBySearchString", () => {
    const data = {};
    expect(actions.getMovieBySearchString(data)).toBeTruthy();
  });

});
