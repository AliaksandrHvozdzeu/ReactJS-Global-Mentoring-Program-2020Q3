import React from "react";
import rerender from "react-test-renderer";
import MovieSorting from "./js/MovieSorting";
import { jest } from "@jest/globals";
import { shallow } from "enzyme";

describe("when MovieSorting", () => {

  const title = "title";
  const options = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const onAction = jest.fn();
  const selectedOption = "";

  test("then snapshot created", () => {
    const component = rerender.create(<MovieSorting title={title}
                                                    options={options}
                                                    onAction={onAction}
                                                    selectedOption={selectedOption} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onChange', () => {
    const component = shallow(<MovieSorting title={title}
                                            options={options}
                                            onAction={onAction}
                                            selectedOption={selectedOption} />);
    const selector = component.find('#date-filter');
    const event = {
      preventDefault() {},
      target: { value: 'the-value' }
    };
    selector.simulate('change', event.target);
    const elem = component.find('.sorting-item');
    expect(elem.length).toBe(5);
  });

});
