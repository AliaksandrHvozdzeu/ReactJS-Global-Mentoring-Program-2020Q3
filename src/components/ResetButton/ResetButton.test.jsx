import React from 'react';
import rerender from 'react-test-renderer';
import { jest } from "@jest/globals";
import { shallow } from "enzyme";
import ResetButton from "../ResetButton";

describe('when ResetButton', () => {

  const onReset = jest.fn();

  test('then snapshot created', () => {
    const component = rerender.create(<ResetButton onReset={onReset}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then reset button click', () => {
    const backResetButton = shallow(<ResetButton onReset={onReset}/>);
    backResetButton.simulate('click');
    expect(backResetButton.text()).toEqual("RESET");
  });

});
