import React from 'react';
import rerender from 'react-test-renderer';
import Header from './js/Header';
import { jest } from "@jest/globals";

describe('when Header', () => {

  test('then snapshot created when blurred', () => {
    const onBuildHeader = jest.fn();
    const component = rerender.create(<Header blur={true} onBuildHeader={onBuildHeader}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('then snapshot created when not blurred', () => {
    const onBuildHeader = jest.fn();
    const component = rerender.create(<Header blur={false} onBuildHeader={onBuildHeader}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
