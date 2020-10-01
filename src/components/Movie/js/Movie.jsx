import React, { useState } from 'react';
import { render } from 'react-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Provider } from 'react-redux';
import MovieMenu from '../../MovieMenu';
import MovieEdit from '../../MovieEdit';
import MovieDelete from '../../MovieDelete';
import Header from '../../Header';
import defaultPoster from '../../../../public/images/not-found.png';
import MoviePoster from '../../MoviePoster';
import store from '../../../store';
import '../css/Movie.css';

export default function Movie({ details }) {

  const history = useHistory();
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

  const onShowMovieDetail = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const header = document.getElementById('header');
    render(<Provider store={store}><Header details={details} blur/></Provider>, header);
    history.push(`/movies/${details.id}`);
  };

  const shortText = (title) => {
    return title.length > 30 ? `${title.substr(0, 30)}...` : title;
  };

  return (
    <>
      <div className="movie-result-item movie">
        <MoviePoster src={details.poster_path}
                     alt="movie poster"
                     className="movie-logo"
                     fallback={defaultPoster}
                     onClick={onShowMovieDetail}
                     onKeyDown={onShowMovieDetail}/>
        <div className="movie-description">
          <button type="button"
                  className="movie-title"
                  onClick={onShowMovieDetail}>{shortText(details.title)}</button>
          <p className="movie-genre">{shortText(details.genres.join(', '))}</p>
          <p className="movie-release">{new Date(details.release_date).getFullYear()}</p>
        </div>
        <MovieMenu
          deleteAction={() => deleteMovieModal()}
          editAction={() => editMovieModal()}
        />
        <Modal isOpen={isEditOpen}
               onRequestClose={editMovieModal}
               className="add-movie-modal"
               overlayClassName="add-movie-modal-overlay"
               ariaHideApp={false}
               shouldCloseOnOverlayClick={false}>
          <div>
            <MovieEdit initialState={details}
                       closeAction={closeEditModal}
                       modalTitle="EDIT MOVIE"/>
          </div>
        </Modal>
        <Modal isOpen={isDeleteOpen}
               onRequestClose={deleteMovieModal}
               className="add-movie-modal"
               overlayClassName="add-movie-modal-overlay"
               ariaHideApp={false}
               shouldCloseOnOverlayClick={false}>
          <div>
            <MovieDelete closeAction={closeDeleteModal}
                         modalTitle="DELETE MOVIE"
                         details={details}/>
          </div>
        </Modal>
      </div>
    </>
  );
}

Movie.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired,
};
