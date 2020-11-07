import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import LoadMoreButton from './js/LoadMoreButton';
import '../../App.css';

export default {
  title: 'LoadMoreButton',
  decorators: [withKnobs],
};

export const Default = () => (
  <LoadMoreButton />
);
