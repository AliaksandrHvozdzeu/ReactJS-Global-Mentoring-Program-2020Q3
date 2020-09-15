import React from 'react';
import '../css/SearchResults.css';
import MovieLoadMessage from '../../MovieLoadMessage';

export default function SearchResults() {

  const MovieResults = React.lazy(() => import('../../MovieResultList'));

  const loadWindow = (
    <MovieLoadMessage />
  );

  return (
    <>
      {/*{searchResults && (*/}
      {/*  <React.Suspense fallback={loadWindow}>*/}
      {/*    <MovieResults results={searchResults}/>*/}
      {/*  </React.Suspense>*/}
      {/*)}*/}
      {/*{!searchResults && <NotFound/>}*/}
        <React.Suspense fallback={loadWindow}>
          <MovieResults/>
        </React.Suspense>
    </>
  );

}
