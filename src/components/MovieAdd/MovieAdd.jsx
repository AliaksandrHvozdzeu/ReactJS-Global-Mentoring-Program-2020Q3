import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Calendar from '../Calendar';
import MultiSelect from '../MultiSelectInput';
import Constants from '../../constants';
import CloseButton from '../CloseButton';
import './style.css';
import MovieActionMessage from '../MovieActionMessage';

export default function MovieAdd({ modalTitle, closeAction }) {

  const [isOpenActionMessage, setIsOpenActionMessage] = useState(false);

  const closeActionMessage = () => {
    setIsOpenActionMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpenActionMessage(true);
  };

  const validate = () => {

  };

  const multiselectValidate = (data) => {

  };

  const reset = () => {

  };

  const submit = () => {

  };

  return (
    <>
      <CloseButton closeAction={closeAction}/>
      <form className="add-movie" onSubmit={handleSubmit}>
        <p className="modal-title">{modalTitle}</p>
        <Input id="movie-id"
               title="Movie id"
               visibility="visibility"
               onChange={validate}/>
        <Input id="movie-title"
               title="Title"
               visibility=""
               onChange={validate}/>
        <Calendar id="movie-release"
                  title="Release date"
                  onChange={validate}
                  value={this}/>
        <Input id="movie-url"
               title="Movie url"
               visibility=""
               onChange={validate}/>
        <MultiSelect title="genre"
                     options={Constants.DEFAULT}
                     onAction={(data) => multiselectValidate(data)}/>
        <Input id="movie-overview"
               title="Overview"
               visibility=""
               onChange={validate}/>
        <Input id="movie-runtime"
               title="Runtime"
               visibility=""
               onChange={validate}/>
        <div className="add-movie-actions">
          <button type="button"
                  className="reset-button"
                  onClick={() => reset}>RESET
          </button>
          <button type="submit"
                  className="submit-button"
                  onClick={() => submit}>SUBMIT
          </button>
        </div>
      </form>
      <MovieActionMessage
        isOpen={isOpenActionMessage}
        closeAction={closeActionMessage}
        title="CONGRATULATION!"
        message="The movie has been added to database successfully!"
        imageType="success"
      />
    </>
  );

}

MovieAdd.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
};
