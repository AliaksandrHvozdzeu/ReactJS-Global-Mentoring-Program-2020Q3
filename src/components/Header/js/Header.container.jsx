import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import SearchPanel from "../../SearchPanel";
import MoviePreview from "../../MoviePreview";
import { movieActions } from "../../../store/actions";
import Header from "./Header";
import "../css/Header.css";

const HeaderContainer = ({ preview, details, blur, onLoadMovieById, movieId, common }) => {

  const onRedirectError = () => {
    return common != null && common.redirect && movieId ? (<Redirect to="/404" />) : null;
  };

  useEffect(() => {
    onRedirectError();
    if (!details && movieId) {
      onLoadMovieById(movieId);
    }
  }, []);

  const onBuildHeader = () => {
    if (!details && !preview) {
      return <SearchPanel />;
    }
    if (!details) {
      return <MoviePreview details={preview} />;
    }
    if (details) {
      return <MoviePreview details={details} />;
    }
    return <SearchPanel />;
  };

  return (
    <Header blur={blur} onBuildHeader={onBuildHeader} />
  );

};

HeaderContainer.propTypes = {
  details: PropTypes.string.isRequired,
  preview: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string
  }),
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    methodType: PropTypes.string,
    loader: PropTypes.bool,
    showMessage: PropTypes.bool,
    redirect: PropTypes.bool
  }),
  blur: PropTypes.bool.isRequired,
  movieId: PropTypes.number,
  onLoadMovieById: PropTypes.func.isRequired
};

HeaderContainer.defaultProps = {
  preview: null,
  movieId: null,
  common: null
};

const mapStateToProps = (state) => ({
  preview: state.movies.preview,
  searchString: state.filters.searchString
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovieById: (id) => dispatch(movieActions.getMovieById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
