import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Input from './js/Input';
import '../../App.css';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const Default = () => (
  <Input />
);
