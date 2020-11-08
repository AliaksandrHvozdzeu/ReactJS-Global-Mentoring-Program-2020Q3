import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BackButton from './js/BackButton';
import '../../App.css';

export default {
  title: 'BackButton',
  decorators: [withKnobs],
};

export const Default = () => (
  <BackButton />
);
