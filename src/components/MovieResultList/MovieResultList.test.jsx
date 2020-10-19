import React from "react";
import rerender from "react-test-renderer";
import MovieResultList from "./js/MovieResultList";
import configureStore from "redux-mock-store";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";

describe("when SearchResultCount", () => {

  const movies = [
      {
        "id": 181808,
        "title": "Star Wars: The Last Jedi",
        "tagline": "The Saga Continues",
        "vote_average": 7.1,
        "vote_count": 4732,
        "release_date": "2017-12-13",
        "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "budget": 200000000,
        "revenue": 1325937250,
        "genres": [
          "Fantasy",
          "Adventure",
          "Science Fiction"
        ],
        "runtime": 152
      },
      {
        "id": 1892,
        "title": "Return of the Jedi",
        "tagline": "The Empire Falls...",
        "vote_average": 7.9,
        "vote_count": 6037,
        "release_date": "1983-05-23",
        "poster_path": "https://image.tmdb.org/t/p/w500/jx5p0aHlbPXqe3AH9G15NvmWaqQ.jpg",
        "overview": "As Rebel leaders map their strategy for an all-out attack on the Emperor's newer, bigger Death Star. Han Solo remains frozen in the cavernous desert fortress of Jabba the Hutt, the most loathsome outlaw in the universe, who is also keeping Princess Leia as a slave girl. Now a master of the Force, Luke Skywalker rescues his friends, but he cannot become a true Jedi Knight until he wages his own crucial battle against Darth Vader, who has sworn to win Luke over to the dark side of the Force.",
        "budget": 32350000,
        "revenue": 572700000,
        "genres": [
          "Adventure",
          "Action",
          "Science Fiction"
        ],
        "runtime": 135
      }
    ];

  const initialStore = {
    "movies": {
      "movies": [
        {
          "id": 181808,
          "title": "Star Wars: The Last Jedi",
          "tagline": "The Saga Continues",
          "vote_average": 7.1,
          "vote_count": 4732,
          "release_date": "2017-12-13",
          "poster_path": "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
          "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
          "budget": 200000000,
          "revenue": 1325937250,
          "genres": [
            "Fantasy",
            "Adventure",
            "Science Fiction"
          ],
          "runtime": 152
        },
        {
          "id": 1892,
          "title": "Return of the Jedi",
          "tagline": "The Empire Falls...",
          "vote_average": 7.9,
          "vote_count": 6037,
          "release_date": "1983-05-23",
          "poster_path": "https://image.tmdb.org/t/p/w500/jx5p0aHlbPXqe3AH9G15NvmWaqQ.jpg",
          "overview": "As Rebel leaders map their strategy for an all-out attack on the Emperor's newer, bigger Death Star. Han Solo remains frozen in the cavernous desert fortress of Jabba the Hutt, the most loathsome outlaw in the universe, who is also keeping Princess Leia as a slave girl. Now a master of the Force, Luke Skywalker rescues his friends, but he cannot become a true Jedi Knight until he wages his own crucial battle against Darth Vader, who has sworn to win Luke over to the dark side of the Force.",
          "budget": 32350000,
          "revenue": 572700000,
          "genres": [
            "Adventure",
            "Action",
            "Science Fiction"
          ],
          "runtime": 135
        }
      ]
    }
  };

  const initialStoreEmptyList = {
    "movies": {
      "movies": []
    }
  };

  test("then snapshot created", () => {
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const component = rerender.create(<Provider store={store}>
      <MovieResultList movies={movies} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then snapshot created when movies list is empty", () => {
    const store = configureStore([])(initialStoreEmptyList);
    store.dispatch = jest.fn();
    const component = rerender.create(<Provider store={store}>
      <MovieResultList movies={[]} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
