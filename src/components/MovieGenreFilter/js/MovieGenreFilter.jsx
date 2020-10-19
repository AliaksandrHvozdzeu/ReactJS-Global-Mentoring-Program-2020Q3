import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Constants from '../../../constants';
import '../css/MovieGenreFilter.css';

export default function MovieGenreFilter({ genres, action, active }) {

  const [activeGenre, setActiveGenre] = useState(active || genres[0]);

  const onClick = (genre) => {
    action(genre);
    setActiveGenre(genre);
  };

  const onSelect = useCallback(
    (event) => {
      const value = event.target;
      action(value);
      setActiveGenre(value);
    },
    [action, setActiveGenre],
  );

  const className = useCallback(
    (genre) => (genre === activeGenre ? 'active' : ''),
    [activeGenre],
  );

  const select = (
    <select
      id="genre-filter"
      className="genre-filter"
      onChange={onSelect}
      value={activeGenre}
    >
      {genres.map((option) => (
        <option key={option} className="genre-filter-item" value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const list = (
    <ul className="genre-filter">
      {genres.map((genre) => (
        <li key={genre} className="genre-filter-item">
          <button
            type="button"
            onClick={() => onClick(genre)}
            className={className(genre)}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {genres.length <= Constants.DEFAULT_COUNT_FILTER_ITEM && list}
      {genres.length > Constants.DEFAULT_COUNT_FILTER_ITEM && select}
    </>
  );

}

MovieGenreFilter.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.func.isRequired,
  active: PropTypes.string,
};

MovieGenreFilter.defaultProps = {
  active: null,
};
