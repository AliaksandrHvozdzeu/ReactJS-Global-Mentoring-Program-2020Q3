import React from "react";
import MovieModal from "./js/MovieModal";
import MovieAdd from "../MovieAdd";
import { jest } from "@jest/globals";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

describe("when MovieModal", () => {

  test("then snapshot created", () => {
    const isOpen = true;
    const openModal = jest.fn();
    const closeModal = jest.fn();

    const initialStore = {
      movies: {
        "genres": ["Comedy", "Crime", "Documentary", "Horror"]
      }
    };

    const store = configureStore([])(initialStore);
    store.dispatch = jest.fn();

    const modalContent = <MovieAdd closeAction={closeModal} modalTitle="ADD MOVIE" />;

    const wrapper = mount(<Provider store={store}>
      <MovieModal isOpen={isOpen}
                  openModal={openModal}
                  modalContent={modalContent} />
    </Provider>);

    expect(wrapper.find(".modal-title").text()).toEqual("ADD MOVIE"); // FAIL
  });

});
