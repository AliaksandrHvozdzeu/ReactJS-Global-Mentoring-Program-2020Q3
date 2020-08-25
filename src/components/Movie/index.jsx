import React, { useState } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import MovieMenu from '../MovieMenu';
import './style.css';
import Modal from 'react-modal';
import MovieEdit from '../MovieEdit';
import MovieDelete from '../MovieDelete';
import Header from '../Header';
import Constants from '../../constants';

export default function Movie({ details }) {

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const deleteMovieModal = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
  };

  const editMovieModal = () => {
    setIsEditOpen(!isEditOpen);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
  };

  const deleteAction = () => {
    //TODO delete movie
  };

  const closePreview = () => {
    render(<Header/>, document.getElementById('header'));
  };

  const movieDetail = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    render(<Header details={details} closePreview={closePreview}/>, document.getElementById('header'));
  };

  const showMovieLogo = (poster, alt) => {
    if (!poster) {
      return <img className="movie-logo" src={Constants.NOT_FOUND_POSTER} alt={alt} onClick={movieDetail}/>;
    }
    return <img className="movie-logo" src={poster} alt={alt} onClick={movieDetail}/>;
  };

  return (
    <>
      <div className="movie-result-item movie">
        {showMovieLogo(details.poster, 'not found movie poster')}
        <div className="movie-description">
          <button className="movie-title"
                  type="button"
                  onClick={movieDetail}>{details.title}</button>
          <p className="movie-genre">{details.genres.join(', ')}</p>
          <p className="movie-release">{new Date(details.release).getFullYear()}</p>
        </div>
        <MovieMenu
          deleteAction={() => deleteMovieModal()}
          editAction={() => editMovieModal()}
        />
        <Modal isOpen={isEditOpen}
               onRequestClose={editMovieModal}
               className="add-movie-modal"
               overlayClassName="add-movie-modal-overlay"
               shouldCloseOnOverlayClick={false}>
          <div>
            <MovieEdit details={details}
                       closeAction={closeEditModal}
                       modalTitle="EDIT MOVIE"/>
          </div>
        </Modal>
        <Modal isOpen={isDeleteOpen}
               onRequestClose={deleteMovieModal}
               className="add-movie-modal"
               overlayClassName="add-movie-modal-overlay"
               shouldCloseOnOverlayClick={false}>
          <div>
            <MovieDelete closeAction={closeDeleteModal}
                         modalTitle="DELETE MOVIE"
                         deleteAction={deleteAction}/>
          </div>
        </Modal>
      </div>
    </>
  );
}

Movie.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired
  }).isRequired,
};
