import React from "react";
import rerender from "react-test-renderer";
import HeaderContainer from "./js/Header.container";
import { jest } from "@jest/globals";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

describe("when AddButton", () => {

  const details = {
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
      "Drama",
      "Romance"
    ],
    "runtime": 106
  };
  const preview = "DETAILS";
  const blur = true;
  const onLoadMovieById = jest.fn();
  const movieId = 19;
  const initialStore = {
    movies: {
      "genres": [
        "Drama",
        "Romance"
      ]
    }
  };
  const store = configureStore([])(initialStore);
  store.dispatch = jest.fn();

  test("then snapshot created", () => {
    const component = rerender.create(<Provider store={store}>
      <HeaderContainer preview={preview}
                       details={details}
                       blur={blur}
                       onLoadMovieById={onLoadMovieById}
                       movieId={movieId}
                       common={[]} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then snapshot created when details is null", () => {
    const component = rerender.create(<Provider store={store}>
      <HeaderContainer preview={preview}
                       details={null}
                       blur={blur}
                       onLoadMovieById={onLoadMovieById}
                       movieId={movieId}
                       common={[]} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then snapshot created when preview is null", () => {
    const component = rerender.create(<Provider store={store}>
      <HeaderContainer preview={null}
                       details={details}
                       blur={blur}
                       onLoadMovieById={onLoadMovieById}
                       movieId={movieId}
                       common={[]} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then snapshot created when preview and details are null", () => {
    const component = rerender.create(<Provider store={store}>
      <HeaderContainer preview={null}
                       details={null}
                       blur={blur}
                       onLoadMovieById={onLoadMovieById}
                       movieId={movieId}
                       common={[]} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
