import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { connect, Provider } from 'react-redux';
import SearchPanel from '../../SearchPanel';
// eslint-disable-next-line import/no-cycle
import MoviePreview from '../../MoviePreview';
import store from '../../../store';
import { movieActions } from '../../../store/actions';
import '../css/Header.css';

const Header = ({ preview, details, blur, onGoToSearch, onLoadMovieById }) => {

  const { id } = useParams();

  useEffect(() => {
    if (!details.id && id) {
      onLoadMovieById(id);
    }
  }, []);

  const buildHeader = () => {
    if (!preview) {
      return details ? <MoviePreview details={details}/> :
        <SearchPanel onGoToSearch={onGoToSearch}/>;
    }
    return preview ? <MoviePreview details={preview}/> :
      <SearchPanel onGoToSearch={onGoToSearch}/>;
  };

  return (
    <Provider store={store}>
      <header id="header" className={blur ? 'blurred' : ''}>
        {buildHeader()}
      </header>
    </Provider>
  );

};

Header.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
  preview: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    methodType: PropTypes.string,
    loader: PropTypes.bool,
    showMessage: PropTypes.bool,
  }).isRequired,
  blur: PropTypes.bool.isRequired,
  onGoToSearch: PropTypes.func,
  onLoadMovieById: PropTypes.func.isRequired,
};

Header.defaultProps = {
  onGoToSearch: null,
  preview: null,
};

const mapStateToProps = (state) => ({
  preview: state.movies.preview,
  searchString: state.filters.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovieById: (id) => dispatch(movieActions.getMovieById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
