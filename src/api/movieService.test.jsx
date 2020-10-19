import axios from 'axios';
import { jest } from '@jest/globals';
import { movieService } from '.';

describe('fetchData', () => {

  const API = 'https://movie-q2020-api.herokuapp.com';
  jest.mock('axios');
  axios.get = jest.fn();
  axios.delete = jest.fn();
  axios.post = jest.fn();
  axios.put = jest.fn();

  const errorMessage = 'Network Error';
  const query = '';
  const searchBy = 'title';
  const limit = 20;
  const offset = 0;
  const sortBy = 'title';
  const sortOrder = 'asc';
  const genre = [];

  const data = {
    'id': 181808,
    'title': 'TEST',
    'release_date': '2020-10-28',
    'poster_path': 'https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true',
    'genres': ['Comedy', 'Crime', 'Documentary', 'Horror'],
    'runtime': 220,
    'overview': 'TEST OVER',
  };

  const responseData = {
    'title': 'TEST',
    'release_date': '2020-10-29',
    'poster_path': 'https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true',
    'genres': ['Comedy', 'Crime', 'Documentary', 'Horror'],
    'overview': 'TEST OVER',
    'runtime': 120,
    'id': 1602354294588,
  };

  // ADD MOVIE

  // test('fetches successfully data from an API for Add Movie', () => {
  //   axios.post(API, data).mockImplementationOnce(() => Promise.resolve(data));
  //   expect(movieService.addMovie(data)).resolves.toEqual(responseData);
  //   expect(axios.post).toHaveBeenCalledWith(
  //     `${API}/movies`,
  //   );
  // });

  test('fetches erroneously data from an API for Add Movie', () => {
    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    expect(movieService.addMovie(data)).rejects.toThrow(errorMessage);
  });

  // DELETE MOVIE

  // test('fetches successfully data from an API for Delete Movie', (url) => {
  //   axios.delete(url).mockImplementationOnce(() => Promise.resolve(181808));
  //   expect(movieService.deleteMovie(181808)).resolves.toEqual(null);
  //   expect(axios.delete).toHaveBeenCalledWith(
  //     `${API}/movies/181808`,
  //   );
  // });

  test('fetches erroneously data from an API for Delete Movie', () => {
    axios.delete.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    expect(movieService.deleteMovie(181808)).rejects.toThrow(errorMessage);
  });

  // EDIT MOVIE

  // test('fetches successfully data from an API for Edit Movie', () => {
  //   axios.put(API, data).mockImplementationOnce(() => Promise.resolve(data));
  //   expect(movieService.editMovie(data)).resolves.toEqual(data);
  //   expect(axios.put(API, data)).toHaveBeenCalledWith(
  //     `${API}/movies`,
  //   );
  // });

  // test('fetches erroneously data from an API for Edit Movie', () => {
  //   axios.put.mockImplementationOnce(() =>
  //     Promise.reject(new Error(errorMessage)),
  //   );
  //   expect(movieService.editMovie(data)).rejects.toThrow(errorMessage);
  // });

  // DET MOVIE BY ID

  // test('fetches successfully data from an API for get movie by id', () => {
  //   axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //   expect(movieService.getMovieById(181808)).resolves.toEqual(data);
  //   expect(axios.get(API)).toHaveBeenCalledWith(
  //     `${API}/movies/181808`,
  //   );
  // });

  test('fetches erroneously data from an API for get movie by id', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    expect(movieService.getMovieById(181808)).rejects.toThrow(errorMessage);
  });

  // GET MOVIES BY SEARCH STRING

  // test('fetches successfully data from an API for get movie by search string', () => {
  //   axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //   expect(movieService.getMovieBySearchString('jedi')).resolves.toEqual(data);
  //   expect(axios.get(API)).toHaveBeenCalledWith(
  //     `${API}/search/jedi`,
  //   );
  // });

  test('fetches erroneously data from an API for get movie by search string', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    expect(movieService.getMovieBySearchString('jedi')).rejects.toThrow(errorMessage);
  });

  // GET MOVIES

  // test('fetches successfully data from an API for get movies', () => {
  //   axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //   expect(movieService.getMovies({
  //     query,
  //     searchBy,
  //     limit,
  //     offset,
  //     sortBy,
  //     sortOrder,
  //     genre,
  //   })).resolves.toEqual(data);
  //   expect(axios.get(API)).toHaveBeenCalledWith(
  //     `${API}/`,
  //   );
  // });

  test('fetches erroneously data from an API for get movies', () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
    expect(movieService.getMovies({
      query,
      searchBy,
      limit,
      offset,
      sortBy,
      sortOrder,
      genre,
    })).rejects.toThrow(errorMessage);
  });

});
