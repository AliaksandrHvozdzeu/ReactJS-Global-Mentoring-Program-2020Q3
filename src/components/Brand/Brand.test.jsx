import React from "react";
import rerender from "react-test-renderer";
import Brand from "./js/Brand";

describe("when Brand", () => {

  test("then snapshot created", () => {
    const component = rerender.create(<Brand />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("when click on brand", () => {
    const component = rerender.create(<Brand />);
    component.root.findByType("a").props.onClick();
  });

});
