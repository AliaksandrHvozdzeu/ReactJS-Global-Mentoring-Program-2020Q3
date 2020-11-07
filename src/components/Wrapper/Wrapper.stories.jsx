import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './js/Wrapper';
import './css/Wrapper.css';
import '../../App.css';
import MovieAddForm from "../MovieAdd/js/MovieAddForm";

export default {
  title: 'Wrapper',
  decorators: [withKnobs],
};

const children = (
  <MovieAddForm onSubmit={() => {alert("closeAction")}}
                modalTitle={"modalTitle"}
                closeAction={() => {alert("closeAction")}}
                initialState={[]}
                availableGenres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}/>
);

export const Default = () => (
  <Wrapper children={children} />
);
