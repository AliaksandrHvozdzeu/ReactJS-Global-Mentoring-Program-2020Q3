import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function MovieGenreFilter({ genres, action, active }) {

  const [activeGenre, setActiveGenre] = useState(active || genres[0]);

  const onClick = (genre) => {
    action(genre);
    setActiveGenre(genre);
  };

  return (
    <>
      <ul className="genre-filter">
        {genres.map((genre) => (
          <li key={genre} className="genre-filter-item">
            <button type="button" onClick={() => onClick(genre)} className={(genre === activeGenre ? 'active' : '')}>
              {genre}
            </button>
          </li>
        ))}
      </ul>
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
