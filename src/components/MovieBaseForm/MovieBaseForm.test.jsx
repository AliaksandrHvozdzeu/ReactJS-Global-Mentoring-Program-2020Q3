import React from "react";
import rerender from "react-test-renderer";
import MovieBaseForm from "./js/MovieBaseForm";
import { jest } from "@jest/globals";

describe("when MovieBaseForm", () => {

  const onSubmit = jest.fn();
  const modalTitle = "BASE FORM";
  const closeAction = jest.fn();
  const initialState = {};
  const availableGenres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  test("then snapshot created", () => {
    const component = rerender.create(<MovieBaseForm onSubmit={onSubmit}
                                                     modalTitle={modalTitle}
                                                     closeAction={closeAction}
                                                     initialState={initialState}
                                                     availableGenres={availableGenres} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
