import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieSection from '../components/MovieSection';
import MovieActionMessageProcessor from '../components/MovieActionMessage/js/MovieActionMessageProcessor';
import ScrollButton from '../components/ScrollButton';
import MovieLoadMessage from '../components/MovieLoadMessage';
import { movieActions } from '../store/actions';

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
      {<MovieActionMessageProcessor modalWindow={common.modalWindow}
                                    isOpen={common.showMessage}
                                    methodType={common.methodType}/>}
      <ScrollButton/>
      {common.loader && <MovieLoadMessage/>}
    </>
  );
};

Home.propTypes = {
  onFilterMovies: PropTypes.func.isRequired,
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    loader: PropTypes.bool,
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
