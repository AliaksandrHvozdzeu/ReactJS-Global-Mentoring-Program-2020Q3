import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ErrorMessage from './js/ErrorMessage';
import './css/ErrorMessage.css';
import '../../App.css';

export default {
  title: 'ErrorMessage',
  decorators: [withKnobs],
};

export const Default = () => (
  <ErrorMessage error="Error message" />
);
