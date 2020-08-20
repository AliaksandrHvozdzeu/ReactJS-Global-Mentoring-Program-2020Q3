import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MovieDetails = ({details}) => (
  <>
    MOVIE DETAILS
    {details}
  </>
);

MovieDetails.propTypes = {
  details: PropTypes.func.isRequired,
};

export default MovieDetails;
