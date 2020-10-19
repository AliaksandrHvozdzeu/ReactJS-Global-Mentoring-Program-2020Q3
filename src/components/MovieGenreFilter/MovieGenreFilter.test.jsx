import React from "react";
import rerender from "react-test-renderer";
import MovieGenreFilter from "./js/MovieGenreFilter";
import { shallow } from "enzyme";
import { jest } from "@jest/globals";

describe("when MovieGenreFilter", () => {

  const action = jest.fn();
  const active = "";
  const genresList = ["Comedy", "Documentary", "Horror", "Crime", "Drama", "Romance", "Adventure", "Comedy"];

  test("then snapshot created", () => {
    const component = rerender.create(<MovieGenreFilter genres={[]}
                                                        action={action}
                                                        active={active} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("genres select", () => {
    const modal = shallow(<MovieGenreFilter genres={genresList}
                                            action={action}
                                            active={active} />);
    expect(modal.find(".genre-filter")).toBeTruthy();
  });

  test("genres list", () => {
    const modal = shallow(<MovieGenreFilter genres={genresList}
                                            action={action}
                                            active={active} />);
    expect(modal.find(".genre-filter")).toBeTruthy();
  });

  test('onChange', () => {
    const component = shallow(<MovieGenreFilter genres={genresList}
                                                action={action}
                                                active={active} />);
    const selector = component.find('#genre-filter');
    const event = {
      preventDefault() {},
      target: { value: genresList[0] }
    };
    selector.simulate('change', event.target);
    const elem = component.find('.genre-filter-item');
    expect(elem.length).toBe(8);
  });

  test('onClick', () => {
    const component = shallow(<MovieGenreFilter genres={genresList}
                                                action={action}
                                                active={active} />);
    const selector = component.find('#genre-filter');
    selector.simulate('click', genresList[0]);
    const elem = component.find('.genre-filter-item');
    expect(elem.length).toBe(8);
  });

});
