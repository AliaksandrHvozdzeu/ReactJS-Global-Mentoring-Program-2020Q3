import React, { useEffect } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "./Home";
import { movieActions } from "../../../store/actions";

// PATTERN: Adapter
const HomeContainer = ({ common, movies, filters, onFilterMovies }) => {

  const { path } = useRouteMatch();

  if (common != null && common.redirect) {
    return (<Redirect to="/404" />);
  }

  useEffect(() => {
    const { searchString, order, genre } = filters;
    const pattern = new RegExp(searchString, "gi");
    const filteredResults = movies
      .filter(
        (movie) =>
          genre === null ||
          genre.toLowerCase() === "all" ||
          movie.genres.indexOf(genre) !== -1
      )
      .filter((movie) => pattern.test(movie.title.toLowerCase()))
      .sort((f, s) => {
        return f[order] > s[order] ? 1 : -1;
      });
    onFilterMovies(filteredResults);
  }, [movies, filters, onFilterMovies]);

  return (
    <Switch>
      <Route exact path={`${path}movies/:id`}>
        <Home common={common} movies={movies} />
      </Route>
      <Route exact path={[path, `${path}search`]}>
        <Home common={common} movies={movies} />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );

};

HomeContainer.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      release_date: PropTypes.string,
      url: PropTypes.string,
      genre: PropTypes.arrayOf(PropTypes.string),
      overview: PropTypes.string,
      runtime: PropTypes.number
    })
  ).isRequired,
  onFilterMovies: PropTypes.func.isRequired,
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    methodType: PropTypes.string,
    loader: PropTypes.bool,
    showMessage: PropTypes.bool,
    redirect: PropTypes.bool,
  }).isRequired,
  filters: PropTypes.shape({
    searchString: PropTypes.string,
    order: PropTypes.string,
    genre: PropTypes.string
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onFilterMovies: (movies) => dispatch(movieActions.filteredMovies(movies))
});

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  filters: state.filters,
  common: state.common
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
