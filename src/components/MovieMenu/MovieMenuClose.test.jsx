import React from "react";
import { shallow } from "enzyme";
import rerender from "react-test-renderer";
import MovieMenuClose from "./js/MovieMenuClose";

describe("when MovieMenuClose", () => {

  const action = () => {
    return open;
  };

  test("then snapshot created", () => {
    const component = rerender.create(<MovieMenuClose action={action} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("click close button", () => {
    const className = "movie-menu movie-menu-closed";
    const button = shallow(
      <MovieMenuClose action={action} />
    )
    button.simulate('click');
    expect(button.hasClass(className)).toEqual(true);
  });

});
