import React from 'react';
import PropTypes from 'prop-types';
import MovieActionMessage from '../index';
import Constants from '../../../constants';

export default function MovieActionMessageProcessor({ modalWindow, isOpen, methodType }) {

  if (modalWindow === Constants.EDIT_SUCCESS) {
    return <MovieActionMessage
      isOpen={isOpen}
      title="CONGRATULATION!"
      message="The movie has been updated successfully!"
      imageType="success"
    />;
  }

  if (modalWindow === Constants.DELETE_SUCCESS) {
    return <MovieActionMessage
      isOpen={isOpen}
      title="CONGRATULATION!"
      message="The movie has been deleted from database successfully!"
      imageType="success"
    />;
  }

  if (modalWindow === Constants.ADD_SUCCESS) {
    return <MovieActionMessage
      isOpen={isOpen}
      title="CONGRATULATION!"
      message="The movie has been added to database successfully!"
      imageType="success"
    />;
  }

  if (modalWindow === Constants.ERROR && methodType === Constants.PUT_METHOD) {
    return <MovieActionMessage
      isOpen={isOpen}
      title="FAILED!"
      message="Movie editing error. Please try again later."
      imageType="failure"
    />;
  }

  if (modalWindow === Constants.ERROR && methodType === Constants.POST_METHOD) {
    return <MovieActionMessage
      isOpen={isOpen}
      title="FAILED!"
      message="Movie adding error. Please try again later."
      imageType="failure"
    />;
  }

  if (modalWindow === Constants.ERROR && methodType === Constants.DELETE_METHOD) {
    return <MovieActionMessage
      isOpen={isOpen}
      title="FAILED!"
      message="Movie deleting error. Please try again later."
      imageType="failure"
    />;
  }

  return null;

}

MovieActionMessageProcessor.propTypes = {
  modalWindow: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  methodType: PropTypes.string,
};

MovieActionMessageProcessor.defaultProps = {
  modalWindow: null,
  methodType: null,
}

