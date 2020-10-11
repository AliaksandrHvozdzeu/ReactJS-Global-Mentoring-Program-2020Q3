import React from 'react';
import rerender from 'react-test-renderer';
import CloseButton from './js/CloseButton';
import { shallow } from "enzyme";

describe('when CloseButton', () => {
  test('then snapshot created', () => {
    const closeAction = () => {};
    const component = rerender.create(<CloseButton closeAction={closeAction}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then click simulate', () => {
    const closeAction = () => {};
    const onClick = jest.fn();
    const backButtonComponent = shallow(<CloseButton  closeAction={closeAction}/>);
    backButtonComponent.simulate('click');
    expect(backButtonComponent.hasClass("close-button")).toEqual(true);
    expect(onClick).toBeCalled();
  });

});
