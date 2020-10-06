import React from 'react';
import rerender from 'react-test-renderer';
import CloseButton from './js/CloseButton';

describe('when CloseButton', () => {
  test('then snapshot created', () => {
    const closeAction = () => {};
    const component = rerender.create(<CloseButton closeAction={closeAction}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
