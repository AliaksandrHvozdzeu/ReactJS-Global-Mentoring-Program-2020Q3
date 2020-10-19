import React from 'react';
import rerender from 'react-test-renderer';
import SearchResultCount from './js/SearchResultCount';

describe('when SearchResultCount', () => {

  test('then snapshot created', () => {
    const count = 200;
    const component = rerender.create(<SearchResultCount count={count}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
