import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import Header from "../../Header";
import Footer from "../../Footer";
import MovieSection from "../../MovieSection";
import MovieActionMessageProcessor from "../../MovieActionMessage/js/MovieActionMessageProcessor";
import ScrollButton from "../../ScrollButton";
import MovieLoadMessage from "../../MovieLoadMessage";

const Home = ({ common, movies }) => {

  const { id } = useParams();

  const isEmptyMovies = () => {
    return movies.length > 4;
  };

  return (
    <>
      <Header closePreview="" details="" blur={!!id} movieId={id} common={common} />
      <MovieSection />
      <Footer />
      <MovieActionMessageProcessor modalWindow={common.modalWindow}
                                   isOpen={common.showMessage}
                                   methodType={common.methodType} />
      {isEmptyMovies() && <ScrollButton />}
      {common.loader && <MovieLoadMessage />}
    </>
  );
};

Home.propTypes = {
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    methodType: PropTypes.string,
    loader: PropTypes.bool,
    showMessage: PropTypes.bool
  }).isRequired,
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
  ).isRequired
};

export default Home;
