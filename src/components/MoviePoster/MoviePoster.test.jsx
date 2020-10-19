import React from "react";
import rerender from "react-test-renderer";
import MoviePoster from "./js/MoviePoster";
import { jest } from "@jest/globals";
import * as Constants from "../../constants";

describe("when MoviePoster", () => {

  const src = "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png";
  const alt = "image";
  const className = "movie-logo";
  const fallback = Constants.DEFAULT_POSTER;
  const onClick = jest.fn();
  const onKeyDown = jest.fn();

  test("then snapshot created", () => {
    const component = rerender.create(<MoviePoster src={src}
                                                   alt={alt}
                                                   className={className}
                                                   fallback={fallback}
                                                   onClick={onClick}
                                                   onKeyDown={onKeyDown} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
