import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Text from './js/Text';
import './css/Text.css';
import '../../App.css';

export default {
  title: 'Text',
  decorators: [withKnobs],
};

export const Default = () => (
  <>
    <label htmlFor="text_id">
      "Text header"
      <p id="text_id" className="text">Text value</p>
    </label>
  </>
);
