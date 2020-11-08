import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import InputEmail from './js/InputEmail';
import '../../App.css';

export default {
  title: 'InputEmail',
  decorators: [withKnobs],
};

export const Default = () => (
  <InputEmail />
);
