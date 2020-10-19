import React from "react";
import rerender from "react-test-renderer";
import MovieMenu from "./js/MovieMenu";

describe("when CloseButton", () => {

  test("then snapshot created", () => {
    const editAction = () => {
    };
    const deleteAction = () => {
    };
    const component = rerender.create(<MovieMenu editAction={editAction}
                                                 deleteAction={deleteAction} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
