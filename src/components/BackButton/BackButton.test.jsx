import React from 'react';
import rerender from 'react-test-renderer';
import BackButton from './js/BackButton';

describe('when BackButton', () => {
  test('then snapshot created', () => {
    const component = rerender.create(<BackButton/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
