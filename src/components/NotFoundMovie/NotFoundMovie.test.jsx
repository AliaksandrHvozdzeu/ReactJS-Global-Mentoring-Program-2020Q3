import React from 'react';
import rerender from 'react-test-renderer';
import NotFoundMovie from './js/NotFoundMovie';

describe('when NotFoundMovie', () => {

  test('then snapshot created', () => {
    const component = rerender.create(<NotFoundMovie/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
