import React from 'react';
import './style.css';

const MovieFilter = () => (
  <>
    <section className="filter-list">
      <div className="filter-item filter-by-genre">
        <ul className="genre-filter">
          <li className="genre-filter-item">
            <a href="#all">All</a>
          </li>
          <li className="genre-filter-item">
            <a href="#documentary">Documentary</a>
          </li>
          <li className="genre-filter-item">
            <a href="#comedy">Comedy</a>
          </li>
          <li className="genre-filter-item">
            <a href="#horror">Horror</a>
          </li>
          <li className="genre-filter-item">
            <a href="#crime">Crime</a>
          </li>
        </ul>
      </div>
      <div className="filter-item filter">
        <label htmlFor="filter" className="filter-title">
          Sort by
          <select id="filter" className="filter-select custom-select">
            <option className="filter-item" value="RELEASE_DATE" selected>
              RELEASE DATE
            </option>
            <option className="filter-item" value="RATING">
              RATING
            </option>
          </select>
        </label>
      </div>
    </section>
  </>
);

export default MovieFilter;
