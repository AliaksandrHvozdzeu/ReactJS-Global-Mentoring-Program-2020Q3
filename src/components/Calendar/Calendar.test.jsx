import React from 'react';
import rerender from 'react-test-renderer';
import Calendar from './js/Calendar';

describe('when Calendar', () => {
  test('then snapshot created', () => {
    const id = 'id';
    const title = 'title';
    const value = 'value';
    const onChange = () => {
    };
    const name = 'name';
    const type = 'type';
    const onBlur = () => {
    };
    const error = 'error';
    const component = rerender.create(<Calendar id={id}
                                                title={title}
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
