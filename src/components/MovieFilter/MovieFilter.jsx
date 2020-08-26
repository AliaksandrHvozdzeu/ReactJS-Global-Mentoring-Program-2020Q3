import React from 'react';
import PropTypes from 'prop-types';
import Constants from '../../constants';
import GenreFilter from '../MovieGenreFilter';
import MovieSorting from '../MovieSorting';
import './style.css';

const MovieFilter = ({ onFilterByGenre, onSorting }) => (
  <>
    <section className="filter-list">
      <div className="filter-item filter-by-genre">
        <GenreFilter genres={Constants.FILTERS} action={onFilterByGenre} />
      </div>
      <div className="filter-item filter">
        <MovieSorting title="SORT BY" options={Constants.SORTING} onAction={onSorting} />
      </div>
    </section>
  </>
);

MovieFilter.propTypes = {
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired
};

export default MovieFilter;
