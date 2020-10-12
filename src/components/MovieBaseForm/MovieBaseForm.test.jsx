import React from 'react';
import rerender from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import MovieBaseForm from './js/MovieBaseForm';

describe('when MovieBaseForm', () => {

  const onSubmit = () => {
  };
  const modalTitle = '';
  const closeAction = () => {
  };
  const initialState = {};
  const availableGenres = {};

  test('then snapshot created', () => {
    const component = rerender.create(<MovieBaseForm onSubmit={onSubmit}
                                                     modalTitle={modalTitle}
                                                     closeAction={closeAction}
                                                     initialState={initialState}
                                                     availableGenres={availableGenres}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('on empty value', () => {
    const initialStateTest = {
      'title': "TEST",
    };
    render(<MovieBaseForm onSubmit={onSubmit}
                          modalTitle={modalTitle}
                          closeAction={closeAction}
                          initialState={initialStateTest}
                          availableGenres={availableGenres}/>);
    const value = screen.getByText('movie-title');
    expect(value).toContain('TEST');
  });

});
