import React from 'react';
import rerender from 'react-test-renderer';
import AddButton from './js/AddButton';
import { shallow } from "enzyme";

describe('when AddButton', () => {

  test('then snapshot created', () => {
    const component = rerender.create(<AddButton/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('openModal', () => {
    const component = shallow(<AddButton />);
    component.openAddModal;
    const addButton = component.find('.add-button');
    addButton.simulate('click');
    expect(addButton.text()).toEqual("+ ADD MOVIE");
    expect(addButton.hasClass("add-button")).toEqual(true);
  });

  it('closeModal ', () => {
    const component = shallow(<AddButton />);
    component.closeAddModal;
    const addButton = component.find('.add-button');
    addButton.simulate('click');
    expect(addButton.text()).toEqual("+ ADD MOVIE");
    expect(addButton.hasClass("add-button")).toEqual(true);
  });

});
