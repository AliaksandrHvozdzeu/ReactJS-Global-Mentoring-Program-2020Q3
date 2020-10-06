import React from 'react';
import rerender from 'react-test-renderer';
import Input from './js/Input';

describe('when Input', () => {
  test('then snapshot created', () => {
    const id = 'id';
    const title = 'title';
    const visibility = 'visibility';
    const value = 'value';
    const onChange = () => {
    };
    const name = 'name';
    const type = 'type';
    const onBlur = () => {
    };
    const error = 'error';
    const component = rerender.create(<Input id={id}
                                             title={title}
                                             visibility={visibility}
                                             value={value}
                                             onChange={onChange}
                                             name={name}
                                             type={type}
                                             onBlur={onBlur}
                                             error={error}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
