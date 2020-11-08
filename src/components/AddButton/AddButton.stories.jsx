import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import AddButton from './js/AddButton';
import '../../App.css';

export default {
  title: 'AddButton',
  decorators: [withKnobs],
};

export const Default = () => (
  <AddButton />
);
