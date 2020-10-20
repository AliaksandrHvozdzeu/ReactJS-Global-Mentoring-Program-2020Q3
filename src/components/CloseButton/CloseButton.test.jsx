import React from 'react';
import rerender from 'react-test-renderer';
import CloseButton from './js/CloseButton';
import { shallow } from "enzyme";
import { jest } from "@jest/globals";

describe('when CloseButton', () => {
  test('then snapshot created', () => {
    const closeAction = jest.fn();
    const component = rerender.create(<CloseButton closeAction={closeAction}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then click simulate', () => {
    const closeAction = jest.fn();
    const closeButton = shallow(<CloseButton  closeAction={closeAction}/>);
    closeButton.find('.close-button').simulate('click');
    closeButton.simulate('click');
    expect(closeAction).toBeCalled();
  });

});
