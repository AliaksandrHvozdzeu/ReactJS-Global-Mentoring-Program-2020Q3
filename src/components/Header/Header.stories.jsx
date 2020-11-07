import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Header from './js/Header.container';
import '../../App.css';

export default {
  title: 'Header',
  decorators: [withKnobs],
};

export const Default = () => (
  <Header />
);
