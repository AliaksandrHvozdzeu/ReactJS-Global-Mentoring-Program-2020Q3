import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Brand from './js/Brand';
import '../../App.css';

export default {
  title: 'Brand',
  decorators: [withKnobs],
};

export const Default = () => (
  <Brand />
);
