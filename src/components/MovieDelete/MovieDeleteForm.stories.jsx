import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import MovieDeleteForm from './js/MovieDeleteForm';
import './css/MovieDelete.css';
import '../../App.css';
import CloseButton from "../CloseButton";

export default {
  title: 'MovieDeleteForm',
  decorators: [withKnobs],
};

export const Default = () => (
  <>
    <CloseButton closeAction={() => alert('closeAction')}/>
    <section className="delete-modal">
      <p className="modal-title">MovieDeleteForm</p>
      <p className="delete-movie-description">
        Are you sure you want to delete this movie?
      </p>
      <button type="button"
              onClick={() => alert('onMovieDeletion')}
              className="submit-delete">
        Confirm
      </button>
    </section>
  </>
);
