import React from "react";
import rerender from "react-test-renderer";
import MovieAddForm from "./js/MovieAddForm";
import { jest } from "@jest/globals";

describe("when MovieAddForm", () => {
  test("then snapshot created", () => {
    const closeAction = () => {
    };
    const modalTitle = "";
    const initialState = {};
    const onSubmit = jest.fn();
    const component = rerender.create(<MovieAddForm onSubmit={onSubmit}
                                                    modalTitle={modalTitle}
                                                    closeAction={closeAction}
                                                    initialState={initialState}
                                                    availableGenres={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
