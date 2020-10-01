import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { movieActions } from '../../../store/actions';
import '../css/LoadMoreButton.css';

const LoadMoreButton = ({ loadMovies }) => {

  const onLoadMovies = useCallback(() => {
    loadMovies();
  }, [loadMovies]);

  return (
    <div className="movies-loader">
      <button className="load-more-button" type="button" onClick={onLoadMovies}>
        Load more...
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(movieActions.loadMovies()),
});

LoadMoreButton.propTypes = {
  loadMovies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoadMoreButton);
