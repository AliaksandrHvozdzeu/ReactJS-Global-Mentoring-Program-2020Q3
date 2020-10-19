import React from "react";
import rerender from "react-test-renderer";
import { jest } from "@jest/globals";
import MovieDelete from "./js/MovieDelete";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("when MovieDelete", () => {

  test("then snapshot created", () => {

    const modalTitle = "DELETE";
    const closeAction = jest.fn();
    const onMovieDeletion = jest.fn();
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
    const initialStore = {
      movies: {
        "genres": ["Comedy", "Crime", "Documentary", "Horror"]
      }
    };
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const component = rerender.create(<Provider store={store}><MovieDelete modalTitle={modalTitle}
                                                                           closeAction={closeAction}
                                                                           onMovieDeletion={onMovieDeletion}
                                                                           details={details} /> </Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
