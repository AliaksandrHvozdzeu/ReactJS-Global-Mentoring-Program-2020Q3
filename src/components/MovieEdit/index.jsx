import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import MultiSelect from '../MultiSelectInput';
import Constants from '../../constants';
import './style.css';
import CloseButton from '../CloseButton';
import Calendar from '../Calendar';

const MovieEdit = ({ modalTitle, closeAction, details }) => (
  <>
    <CloseButton closeAction={closeAction}/>
    <form className="add-movie" onSubmit={() => console.log('form submitted')}>
      <p className="modal-title">{modalTitle}</p>
      <Input id="movie-id"
             title="Movie id"
             visibility=""
             value={details.id}
             onChange={console.log('Validate')}/>
      <Input id="movie-title"
             title="Title"
             visibility=""
             value={details.title}
             onChange={console.log('Validate')}/>
      <Calendar id="movie-release"
                title="Release date"
                value={details.release}
                onChange={console.log('Validate')}/>
      <Input id="movie-url"
             title="Movie url"
             visibility=""
             value={details.poster}
             onChange={console.log('Validate')}/>
      <MultiSelect title="genre"
                   options={Constants.DEFAULT}
                   preselected={details.genres}
                   onAction={(data) => console.log(data)}/>
      <Input id="movie-overview"
             title="Overview"
             visibility=""
             value={details.description}
             onChange={console.log('Validate')}/>
      <Input id="movie-runtime"
             title="Runtime"
             visibility=""
             value={details.runtime}
             onChange={console.log('Validate')}/>
      <div className="add-movie-actions">
        <button className="reset-button"
                onClick={() => console.log('Reset action')}>RESET</button>
        <button className="submit-button"
                onClick={() => console.log('Submit action')}>SUBMIT</button>
      </div>
    </form>
  </>
);

MovieEdit.propTypes = {
  closeAction: PropTypes.func.isRequired,
  details: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    release: PropTypes.string,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
};

export default MovieEdit;
