import React from 'react';
import './style.css';
import Input from '../Input';
import Calendar from '../Calendar';
import MultiSelect from '../MultiSelectInput';
import Constants from '../../constants';
import CloseButton from '../CloseButton';
import PropTypes from 'prop-types';

const MovieAdd = ({ modalTitle, closeAction }) => (
  <>
    <CloseButton closeAction={closeAction}/>
    <form className="add-movie" onSubmit={() => console.log('form submitted')}>
      <p className="modal-title">{modalTitle}</p>
      <Input id="movie-id"
             title="Movie id"
             visibility="visibility"
             onChange={console.log('Validate')}/>
      <Input id="movie-title"
             title="Title"
             visibility=""
             onChange={console.log('Validate')}/>
      <Calendar id="movie-release"
                title="Release date"
                onChange={console.log('Validate')}/>
      <Input id="movie-url"
             title="Movie url"
             visibility=""
             onChange={console.log('Validate')}/>
      <MultiSelect title="genre"
                   options={Constants.DEFAULT}
                   onAction={(data) => console.log(data)}/>
      <Input id="movie-overview"
             title="Overview"
             visibility=""
             onChange={console.log('Validate')}/>
      <Input id="movie-runtime"
             title="Runtime"
             visibility=""
             onChange={console.log('Validate')}/>
      <div className="add-movie-actions">
        <button className="reset-button"
                onClick={() => console.log('Reset action')}>RESET
        </button>
        <button className="submit-button"
                onClick={() => console.log('Submit action')}>SUBMIT
        </button>
      </div>
    </form>
  </>
);

MovieAdd.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.string.isRequired,
};

export default MovieAdd;
