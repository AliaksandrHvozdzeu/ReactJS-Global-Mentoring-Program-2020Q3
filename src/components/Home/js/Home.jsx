import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Header';
import Footer from '../../Footer';
import MovieSection from '../../MovieSection';
import MovieActionMessageProcessor from '../../MovieActionMessage/js/MovieActionMessageProcessor';
import ScrollButton from '../../ScrollButton';
import MovieLoadMessage from '../../MovieLoadMessage';
import { movieActions } from '../../../store/actions';

const Home = ({ movies, common, filters, onFilterMovies }) => {

  useEffect(() => {
    const { searchString, order, genre } = filters;
    const pattern = new RegExp(searchString, 'gi');
    const filteredResults = movies
      .filter(
        (movie) =>
          genre === null ||
          genre.toLowerCase() === 'all' ||
          movie.genres.indexOf(genre) !== -1,
      )
      .filter((movie) => pattern.test(movie.title.toLowerCase()))
      .sort((f, s) => {
        if (f[order] > s[order]) {
          return 1;
        }
        return -1;
      });
    onFilterMovies(filteredResults);
  }, [movies, filters, onFilterMovies]);

  return (
    <>
      <Header closePreview=""
              details=""
              blur=""/>
      <MovieSection/>
      <Footer/>
      <MovieActionMessageProcessor modalWindow={common.modalWindow}
                                   isOpen={common.showMessage}
                                   methodType={common.methodType}/>
      <ScrollButton/>
      {common.loader && <MovieLoadMessage/>}
    </>
  );
};
Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      release_date: PropTypes.string,
      url: PropTypes.string,
      genre: PropTypes.arrayOf(PropTypes.string),
      overview: PropTypes.string,
      runtime: PropTypes.number,
    }),
  ).isRequired,
  onFilterMovies: PropTypes.func.isRequired,
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    methodType: PropTypes.string,
    loader: PropTypes.bool,
    showMessage: PropTypes.bool,
  }).isRequired,
  filters: PropTypes.shape({
    searchString: PropTypes.string,
    order: PropTypes.string,
    genre: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  filters: state.filters,
  common: state.common,
});
const mapDispatchToProps = dispatch => ({
  onFilterMovies: (movies) => dispatch(movieActions.filteredMovies(movies)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
