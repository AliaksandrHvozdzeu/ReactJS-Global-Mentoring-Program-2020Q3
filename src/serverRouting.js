import renderHtml from "./serverRenderer";
import createStore from "./store";
import { movieActions } from "./store/actions";

const renderPreview = (url, movieId) => {
  const store = createStore({});
  return Promise.resolve(
    store.dispatch(movieActions.getMovieById(movieId))
  ).then(() => renderHtml(store, url));
};

const renderHome = (url) => {
  const store = createStore({});
  return renderHtml(store, url);
};

export default { renderHome, renderPreview };
