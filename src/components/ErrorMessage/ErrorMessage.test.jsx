import React from 'react';
import rerender from 'react-test-renderer';
import ErrorMessage from './js/ErrorMessage';

describe('when ErrorMessage', () => {
  test('then snapshot created', () => {
    const error = 'Title is required.';
    const component = rerender.create(<ErrorMessage error={error}/>);
    const tree = component.toJSON();
    expect(component.root.findByType('p').text()).toEqual("Title is required.");
    expect(tree).toMatchSnapshot();
  });

});
