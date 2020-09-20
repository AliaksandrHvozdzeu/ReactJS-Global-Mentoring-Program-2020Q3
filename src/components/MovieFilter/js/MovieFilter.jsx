import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GenreFilter from '../../MovieGenreFilter';
import MovieSorting from '../../MovieSorting';
import filterActions from '../../../store/actions/filter';
import Constants from '../../../constants';
import '../css/MovieFilter.css';

const MovieFilter = ({ genres, onFilterByGenre, onSorting }) => {

  const onGenreFiltering = useCallback(
    (genre) => {
      if (genre === genres[0]) {
        onFilterByGenre(null);
      } else {
        onFilterByGenre(genre);
      }
    },
    [genres, onFilterByGenre],
  );

  return (
    <>
      <section className="filter-list">
        <div className="filter-item filter-by-genre">
          <GenreFilter genres={genres}
                       action={onGenreFiltering}/>
        </div>
        <div className="filter-item filter">
          <MovieSorting title="SORT BY"
                        options={Constants.SORTING}
                        onAction={onSorting}/>
        </div>
      </section>
    </>
  );

}

MovieFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genres: state.movies.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterByGenre: (genre) => dispatch(filterActions.filterByGenre(genre)),
  onSorting: (order) => dispatch(filterActions.changeOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieFilter);
