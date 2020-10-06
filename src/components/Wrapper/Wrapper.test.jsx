import React from 'react';
import rerender from 'react-test-renderer';
import { render } from 'enzyme';
import Wrapper from './js/Wrapper';

describe('when Wrapper rendered', () => {
  test('then child component should be rendered', () => {
    const TestChildComponent = <div className="test">Test child element</div>;
    const component = rerender.create(<Wrapper>{TestChildComponent}</Wrapper>);
    const tree = component.toJSON();
    const wrapperComponent = render(<Wrapper>{TestChildComponent}</Wrapper>);
    expect(wrapperComponent.find('.wrapper > .test')).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
