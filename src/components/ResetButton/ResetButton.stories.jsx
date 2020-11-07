import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ResetButton from './js/ResetButton';
import '../../App.css';

export default {
  title: 'ResetButton',
  decorators: [withKnobs],
};

export const Default = () => (
  <ResetButton onReset={() => alert('Default')}/>
);
