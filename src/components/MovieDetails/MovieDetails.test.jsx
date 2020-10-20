import React from "react";
import rerender from "react-test-renderer";
import MovieDetails from "./js/MovieDetails";
import { shallow } from "enzyme";

describe("when MovieDetails", () => {

  test("then poster_path is empty", () => {
    const details = {
      "vote_average": "2",
      "poster_path": ""
    };
    const component = rerender.create(<MovieDetails details={details} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then poster_path is not correct", () => {
    const details = null;
    const component = rerender.create(<MovieDetails details={details} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("then snapshot created when details is null", () => {
    const details = {
      "title": "Test",
      "release_date": "2020-10-21",
      "poster_path": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "overview": "over",
      "runtime": 120
    };
    const component = rerender.create(<MovieDetails details={details} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders", () => {
    const details = {
      "title": "Test",
      "release_date": "2020-10-21",
      "poster_path": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "overview": "over",
      "runtime": 120
    };
    const wrapper = shallow(
      <MovieDetails details={details} />
    );

    expect(wrapper.exists()).toBe(true);
  });

});
