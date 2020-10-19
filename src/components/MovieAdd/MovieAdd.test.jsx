import React from "react";
import MovieAdd from "./js/MovieAdd";
import rerender from "react-test-renderer";
import { mount } from "enzyme";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import { movieActions } from "../../store/actions";
import configureStore from "redux-mock-store";

describe("when MovieAdd", () => {

  const closeAction = jest.fn();
  const modalTitle = "ADD MOVIE";

  test("then snapshot created", () => {
    const initialStore = {
      movies: {
        "genres": ["Comedy", "Crime", "Documentary", "Horror"]
      }
    };
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const onSubmit = store.dispatch((data) => movieActions.addMovie(data));
    const component = rerender.create(<Provider store={store}>
      <MovieAdd modalTitle={modalTitle}
                closeAction={closeAction}
                onSubmit={onSubmit} /></Provider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("add form", () => {
    const initialStore = {
      movies: {
        "genres": ["Comedy", "Crime", "Documentary", "Horror"]
      }
    };
    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();
    const onSubmit = store.dispatch((data) => movieActions.addMovie(data));
    const wrapper = mount(
      <Provider store={store}>
        <MovieAdd modalTitle={modalTitle}
                  closeAction={closeAction}
                  onSubmit={onSubmit} />
      </Provider>);
    expect(wrapper.find(".modal-title").text()).toEqual(modalTitle);
  });

});
