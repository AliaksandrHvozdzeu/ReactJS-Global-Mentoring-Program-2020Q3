import React from "react";
import rerender from "react-test-renderer";
import MovieMenuOpen from "./js/MovieMenuOpen";
import { shallow } from "enzyme";

describe("when MovieMenuOpen", () => {

  const action = () => {
    return false;
  };
  const editMovie = () => {
  };
  const deleteMovie = () => {
  };

  test("then snapshot created", () => {

    const component = rerender.create(<MovieMenuOpen action={action}
                                                     editMovie={editMovie}
                                                     deleteMovie={deleteMovie} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("click open button", () => {
    const className = "movie-menu-close";
    const title = "Close";
    const component = shallow(
      <MovieMenuOpen action={action}
                     editMovie={editMovie}
                     deleteMovie={deleteMovie} />
    )
    const button = component.find("#movie-menu-close-button");
    button.simulate('click');
    expect(button.hasClass(className)).toEqual(true);
    expect(button.text()).toEqual(title);
  });

});
