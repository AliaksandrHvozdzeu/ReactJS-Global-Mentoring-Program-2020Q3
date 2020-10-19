import React from "react";
import rerender from "react-test-renderer";
import MovieFilter from "./js/MovieFilter";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("when MovieFilter", () => {

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
    const genres = ["Comedy", "Crime", "Documentary", "Horror"];
    const onFilterByGenre = jest.fn();
    const onSorting = jest.fn();
    const component = rerender.create(
      <Provider store={store}>
        <MovieFilter genres={genres}
                     onFilterByGenre={onFilterByGenre}
                     onSorting={onSorting} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then snapshot created when genres is empty", () => {
    const onFilterByGenre = jest.fn();
    const onSorting = jest.fn();
    const component = rerender.create(
      <Provider store={store}>
        <MovieFilter genres={[]}
                     onFilterByGenre={onFilterByGenre}
                     onSorting={onSorting} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
