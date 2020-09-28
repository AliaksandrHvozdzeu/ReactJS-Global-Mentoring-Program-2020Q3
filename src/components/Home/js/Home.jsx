import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';
import Footer from '../../Footer';
import MovieSection from '../../MovieSection';
import MovieActionMessageProcessor from '../../MovieActionMessage/js/MovieActionMessageProcessor';
import ScrollButton from '../../ScrollButton';
import MovieLoadMessage from '../../MovieLoadMessage';

const Home = ({ common, onGoToSearch }) => {

  return (
    <>
      <Header closePreview="" details="" blur="" onGoToSearch={onGoToSearch}/>
      <MovieSection/>
      <Footer/>
      <MovieActionMessageProcessor modalWindow={common.modalWindow}
                                   isOpen={common.showMessage}
                                   methodType={common.methodType}/>
      <ScrollButton/>
      {common.loader && <MovieLoadMessage/>}
    </>
  );
};

Home.propTypes = {
  common: PropTypes.shape({
    modalWindow: PropTypes.string,
    methodType: PropTypes.string,
    loader: PropTypes.bool,
    showMessage: PropTypes.bool,
  }).isRequired,
  onGoToSearch: PropTypes.func,
};

Home.defaultProps = {
  onGoToSearch: null,
}

export default Home;
