import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Movie from "../../Movie";
import SearchResultCount from "./SearchResultCount";
import NotFoundMovie from "../../NotFoundMovie";
import "../css/MovieResultList.css";

const MovieResultList = ({ movies }) => {

  const isMoviesNotFound = () => {
    if (movies.length === 0) {
      return (
        <section className="movie-result">
          <NotFoundMovie />
        </section>
      );
    }
    return (
      <>
        <section className="movie-result">
          <SearchResultCount count={movies.length} />
          <div className="movie-result-list">
            {movies.map((movieDetails) => (
              <Movie key={`${movieDetails.id}`} details={movieDetails} />
            ))}
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      {isMoviesNotFound()}
    </>
  );

};

MovieResultList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string),
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number
    }).isRequired
  ).isRequired
};

const mapStateToProps = (state) => ({ movies: state.movies.movies });

export default connect(mapStateToProps, null)(MovieResultList);
