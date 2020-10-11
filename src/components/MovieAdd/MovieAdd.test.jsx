import React from "react";
import rerender from "react-test-renderer";
import MovieAdd from "./js/MovieAdd";
import { shallow } from "enzyme";

describe("when MovieAdd", () => {

  const closeAction = () => {
  };
  const onSubmit = () => {
  };
  const modalTitle = "ADD MOVIE";

  test("then snapshot created", () => {
    const component = rerender.create(<MovieAdd modalTitle={modalTitle}
                                                closeAction={closeAction}
                                                onSubmit={onSubmit} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('updates', () => {
    const wrapper = shallow(<MovieAdd modalTitle={modalTitle}
                                             closeAction={closeAction}
                                             onSubmit={onSubmit} />);
    console.log(wrapper);
    // wrapper.simulate('change', { target: { value: 'abc' } })
    // wrapper.setProps({ testProp: false })
    // expect(wrapper.prop('value')).toEqual('abc') // FAIL
  })



});
