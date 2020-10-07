import React from "react";
import Wrapper from "../../Wrapper";
import ErrorBoundary from "../../ErrorBoundary";
import Filter from "../../MovieFilter";
import MovieLoadMessage from "../../MovieLoadMessage";
import "../css/MovieSection.css";

export default function MovieSection() {

  const SearchResults = React.lazy(() => import("../../SearchResults"));

  const loadWindow = (
    <MovieLoadMessage />
  );

  return (
    <>
      <main>
        <ErrorBoundary>
          <Wrapper>
            <Filter />
            <React.Suspense fallback={loadWindow}>
              <SearchResults />
            </React.Suspense>
          </Wrapper>
        </ErrorBoundary>
      </main>
    </>
  );

}
