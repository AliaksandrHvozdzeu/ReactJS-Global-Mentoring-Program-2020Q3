import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Footer from './js/Footer';
import '../../App.css';

export default {
  title: 'Footer',
  decorators: [withKnobs],
};

export const Default = () => (
  <Footer />
);
