import React from 'react';
import rerender from 'react-test-renderer';
import { mount, render } from "enzyme";
import Wrapper from './js/Wrapper';
import ErrorBoundary from "../ErrorBoundary";

describe('when Wrapper rendered', () => {

  test('then child component should be rendered', () => {
    const TestChildComponent = <div className="test">Test child element</div>;
    const component = rerender.create(<Wrapper>{TestChildComponent}</Wrapper>);
    const tree = component.toJSON();
    const wrapperComponent = render(<Wrapper>{TestChildComponent}</Wrapper>);
    expect(wrapperComponent.find('.wrapper > .test')).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  const Something = () => null;

  describe('ErrorBoundary', () => {
    it('should display an ErrorMessage if wrapped component throws', () => {
      const wrapper = mount(
        <ErrorBoundary>
          <Something />
        </ErrorBoundary>
      );
      const error = new Error('test');
      wrapper.find(Something).simulateError(error);
    });
  });

});
