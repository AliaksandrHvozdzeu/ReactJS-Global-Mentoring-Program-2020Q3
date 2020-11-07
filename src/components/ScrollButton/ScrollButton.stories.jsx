import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ScrollButton from './js/ScrollButton';
import '../../App.css';

export default {
  title: 'ScrollButton',
  decorators: [withKnobs],
};

export const Default = () => (
  <ScrollButton />
);
