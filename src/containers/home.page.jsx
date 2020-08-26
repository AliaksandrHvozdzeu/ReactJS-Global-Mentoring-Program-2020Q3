import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Constants from '../constants';

const Home = ({ results }) => {

  const ALL_GENRES = Constants.FILTERS[0];
  const [filtered, setFilteredResults] = useState(results);
  const [filter, setFilter] = useState({
    genre: null,
    order: 'release',
    searchString: '',
  });

  useEffect(() => {
    const { searchString, order, genre } = filter;
    const pattern = new RegExp(searchString);
    setFilteredResults(
      results
        .filter((movie) => genre === null || movie.genres.indexOf(genre) !== -1)
        .filter((movie) => pattern.test(movie.title.toLowerCase()))
        .sort((f, s) => {
          return f[order] > s[order] ? 1 : -1;
        }),
    );
  }, [filter, results]);

  const onFilterByGenre = (genre) => {
    setFilter({ ...filter, genre: genre === ALL_GENRES ? null : genre });
  };

  const onSorting = (sortingField) => {
    setFilter({ ...filter, order: Constants.MAPPING[sortingField.toLowerCase()] });
  };

  const onFilterByName = (query) => {
    setFilter({ ...filter, searchString: query.toLowerCase() });
  };

  return (
    <>
      <Header filterByName={filter.searchString}
              onFilterByName={onFilterByName}
              closePreview=""
              details=""/>
      <Content searchResults={filtered}
               onFilterByGenre={onFilterByGenre}
               onSorting={onSorting}/>
      <Footer/>
    </>
  );

};

Home.propTypes = {
  results: PropTypes.string.isRequired,
};

export default Home;
