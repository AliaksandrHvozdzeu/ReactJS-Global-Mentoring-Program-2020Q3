import React from 'react';
import rerender from 'react-test-renderer';
import MovieSection from './js/MovieSection';

describe('when MovieSection', () => {

  test('then snapshot created', () => {
    const component = rerender.create(<MovieSection/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
