import React from 'react';
import rerender from 'react-test-renderer';
import Brand from './js/Brand';

describe('when Brand', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<Brand />);
    component.root.findByType('a').props.onClick();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
