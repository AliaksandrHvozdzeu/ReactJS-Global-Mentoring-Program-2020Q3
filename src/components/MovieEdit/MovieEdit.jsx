import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import MultiSelect from '../MultiSelectInput';
import Constants from '../../constants';
import CloseButton from '../CloseButton';
import Calendar from '../Calendar';
import './style.css';

const handleSubmit = () => {

};

const validate = () => {

};

const multiselectValidate = (data) => {

};

const reset = () => {

};

const submit = () => {

};

const MovieEdit = ({ modalTitle, closeAction, details }) => (
  <>
    <CloseButton closeAction={closeAction}/>
    <form className="add-movie" onSubmit={handleSubmit}>
      <p className="modal-title">{modalTitle}</p>
      <Input id="movie-id"
             title="Movie id"
             visibility=""
             value={details.id}
             onChange={validate}/>
      <Input id="movie-title"
             title="Title"
             visibility=""
             value={details.title}
             onChange={validate}/>
      <Calendar id="movie-release"
                title="Release date"
                value={details.release}
                onChange={validate}/>
      <Input id="movie-url"
             title="Movie url"
             visibility=""
             value={details.poster}
             onChange={validate}/>
      <MultiSelect title="genre"
                   options={Constants.DEFAULT}
                   preselected={details.genres}
                   onAction={(data) => multiselectValidate(data)}/>
      <Input id="movie-overview"
             title="Overview"
             visibility=""
             value={details.description}
             onChange={validate}/>
      <Input id="movie-runtime"
             title="Runtime"
             visibility=""
             value={details.runtime}
             onChange={validate}/>
      <div className="add-movie-actions">
        <button type="button"
                className="reset-button"
                onClick={() => reset()}>RESET
        </button>
        <button type="button"
                className="submit-button"
                onClick={() => submit()}>SUBMIT
        </button>
      </div>
    </form>
  </>
);

MovieEdit.propTypes = {
  modalTitle: PropTypes.string.isRequired,
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
