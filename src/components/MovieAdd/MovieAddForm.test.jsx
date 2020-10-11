import React from "react";
import rerender from "react-test-renderer";
import MovieAddForm from "./js/MovieAddForm";

describe("when MovieAddForm", () => {
  test("then snapshot created", () => {
    const closeAction = () => {
    };
    const modalTitle = "";
    const initialState = {};
    const availableGenres = [];
    const onSubmit = () => {
    };
    const component = rerender.create(<MovieAddForm onSubmit={onSubmit}
                                                    modalTitle={modalTitle}
                                                    closeAction={closeAction}
                                                    initialState={initialState}
                                                    availableGenres={availableGenres} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
