import React from 'react';
import rerender from 'react-test-renderer';
import MovieLoadMessage from './js/MovieLoadMessage';
import { mount } from "enzyme";

describe('when MovieLoadMessage', () => {

  test('then snapshot created', () => {
    const component = rerender.create(<MovieLoadMessage/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('containers with hidden style', () => {
    const container = document.body;
    container.style.overflow = 'hidden';
    expect(container.style.overflow).toEqual('hidden');
  });

  test('MovieLoadMessage useEffect', () => {
    const wrapper = mount(<MovieLoadMessage />);
    expect(wrapper.find('.modal-window-loader').text()).toBe('Loading... Please wait!');
    wrapper.setProps({
      importantProp: 'new value',
    });
    wrapper.update();
    expect(wrapper.find('.modal-window-loader').text()).toBe('Loading... Please wait!');
  });

});
