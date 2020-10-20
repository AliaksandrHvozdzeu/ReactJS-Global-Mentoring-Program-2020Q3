import React from "react";
import SearchPanel from "./js/SearchPanel";
import { jest } from "@jest/globals";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import rerender from "react-test-renderer";
import { mount } from "enzyme";

describe("when SearchPanel", () => {

  const initialStore = {
    movies: {
      "genres": ["Comedy", "Crime", "Documentary", "Horror"]
    }
  };
  const onSearch = jest.fn();
  const onClearSearch = jest.fn();
  const store = configureStore([])(initialStore);
  store.dispatch = jest.fn();

  test("then snapshot created", () => {
    const component = rerender.create(
      <Provider store={store}>
        <SearchPanel onSearch={onSearch}
                     onClearSearch={onClearSearch} />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Search input onChange event", () => {
    const component = mount(<Provider store={store}>
      <SearchPanel onSearch={onSearch} onClearSearch={onClearSearch} />
    </Provider>);
    const input = component.find("#search-field");
    const e = {
      preventDefault() {},
      target: { value: "jedi" }
    };
    input.simulate("change", e.target);
    input.update();
    expect(input.text()).toEqual("");
  });

  test("Search input onInput event", () => {
    const component = mount(<Provider store={store}>
      <SearchPanel onSearch={onSearch} onClearSearch={onClearSearch} />
    </Provider>);
    const input = component.find("#search-field");
    const e = {
      preventDefault() {},
      target: { value: "jedi" }
    };
    input.simulate("input", e.target);
    input.update();
    expect(input.text()).toEqual("");
  });

});
