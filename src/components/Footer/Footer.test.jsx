import React from 'react';
import rerender from 'react-test-renderer';
import { render } from 'enzyme';
import Footer from './js/Footer';
import Wrapper from '../Wrapper';

describe('when Footer rendered', () => {
  test('then Brand component is rendered', () => {
    const brandChildComponent = (
      <Wrapper>
        <p className="app-title">
          <span className="app-title-name">netflix</span>
          roulette
        </p>
      </Wrapper>
    );
    const component = rerender.create(<Footer>{brandChildComponent}</Footer>);
    const tree = component.toJSON();
    const FooterComponent = render(<Footer>{brandChildComponent}</Footer>);
    expect(FooterComponent.find('.app-title-name')).toBeTruthy();
    expect(FooterComponent.find('.app-title-name').text()).toEqual('netflix');
    expect(tree).toMatchSnapshot();
  });
});
