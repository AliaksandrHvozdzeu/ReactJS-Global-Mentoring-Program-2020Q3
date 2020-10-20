import React from "react";
import rerender from "react-test-renderer";
import Constants from '../../constants';
import PosterPreview from "./js/PosterPreview";

describe("when PosterPreview", () => {

  const isOpen = true;
  const onClose = () => {
  };
  const src = Constants.DEFAULT_POSTER;
  const alt = "movie poster logo";
  const fallback = Constants.DEFAULT_POSTER;

  test("then snapshot created", () => {
    const component = rerender.create(<PosterPreview isOpen={isOpen}
                                                     onClose={onClose}
                                                     src={src}
                                                     alt={alt}
                                                     fallback={fallback} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("when scr is not default", () => {
    const src2 = "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg";
    const alt2 = "movie";
    const component = rerender.create(<PosterPreview isOpen={isOpen}
                                                     onClose={onClose}
                                                     src={src2}
                                                     alt={alt2}
                                                     fallback={fallback} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
