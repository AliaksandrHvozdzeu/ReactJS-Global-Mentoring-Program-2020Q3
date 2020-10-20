import React from "react";
import rerender from "react-test-renderer";
import MovieEditForm from "./js/MovieEditForm";
import { jest } from "@jest/globals";

describe("when MovieEditForm", () => {

  test("then snapshot created", () => {
    const closeAction = jest.fn();
    const modalTitle = "EDIT FORM";
    const initialState = {};
    const onSubmit = jest.fn();
    const component = rerender.create(<MovieEditForm closeAction={closeAction}
                                                     modalTitle={modalTitle}
                                                     initialState={initialState}
                                                     availableGenres={[]}
                                                     onSubmit={onSubmit}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
