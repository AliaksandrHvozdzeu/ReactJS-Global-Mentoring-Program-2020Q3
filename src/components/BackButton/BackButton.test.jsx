import React from 'react';
import rerender from 'react-test-renderer';
import { shallow } from "enzyme";
import BackButton from './js/BackButton';

describe('when BackButton', () => {

  test('then snapshot created', () => {
    const component = rerender.create(<BackButton/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then click simulate', () => {
    const onClick = jest.fn();
    const backButtonComponent = shallow(<BackButton/>);
    backButtonComponent.simulate('click');
    expect(backButtonComponent.text()).toEqual("Back");
    expect(backButtonComponent.hasClass("back-button")).toEqual(true);
    expect(onClick).toBeCalled();
  });

});
