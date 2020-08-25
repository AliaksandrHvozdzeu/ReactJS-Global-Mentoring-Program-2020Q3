import React from 'react';
import Constants from '../../constants';
import './style.css';
import GenreFilter from '../MovieGenreFilter';
import MovieSorting from '../MovieSorting';
import PropTypes from 'prop-types';
import MovieEdit from '../MovieEdit';

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

MovieEdit.propTypes = {
  onFilterByGenre: PropTypes.func.isRequired,
  onSorting: PropTypes.func.isRequired
};

export default MovieFilter;
