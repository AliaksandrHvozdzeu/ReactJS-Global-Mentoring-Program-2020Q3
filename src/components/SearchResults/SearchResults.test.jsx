import React from 'react';
import rerender from 'react-test-renderer';
import SearchResults from './js/SearchResults';

describe('when SearchResults', () => {

  test('then snapshot created', () => {
    const component = rerender.create(<SearchResults/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
