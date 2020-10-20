import React from 'react';
import { render } from 'enzyme';
import rerender from 'react-test-renderer';
import Text from './js/Text';

describe('when Text', () => {
  test('then snapshot created', () => {
    const TextComponentId = 'test-text-id';
    const TextComponentTitle = 'Test text title';
    const TextComponentValue = 'Test text value';
    const component = rerender.create(<Text id={TextComponentId}
                                            title={TextComponentTitle}
                                            value={TextComponentValue}/>);
    const textComponent = render(<Text id={TextComponentId}
                                       title={TextComponentTitle}
                                       value={TextComponentValue}/>);
    expect(textComponent.find('.text').text()).toEqual('Test text value');
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
