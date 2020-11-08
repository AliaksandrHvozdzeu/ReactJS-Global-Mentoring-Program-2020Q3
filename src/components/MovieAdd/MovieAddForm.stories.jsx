import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import MovieAddForm from './js/MovieAddForm';
import './css/MovieAdd.css';
import '../../App.css';

export default {
  title: 'MovieAddForm',
  decorators: [withKnobs],
};

export const Default = () => (
  <MovieAddForm onSubmit={() => {alert("closeAction")}}
                modalTitle={"modalTitle"}
                closeAction={() => {alert("closeAction")}}
                initialState={[]}
                availableGenres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}/>
);
