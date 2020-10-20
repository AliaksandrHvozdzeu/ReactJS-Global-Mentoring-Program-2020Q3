import React from 'react';
import rerender from 'react-test-renderer';
import InputEmail from './js/InputEmail';

describe('when Input', () => {
  test('then snapshot created', () => {
    const title = 'title';
    const component = rerender.create(<InputEmail title={title}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
