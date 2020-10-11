import { movieService } from "./";
import axios from "axios";
import Axios from "axios";
import { jest } from "@jest/globals";

describe("fetchData", () => {

  const API = "https://movie-q2020-api.herokuapp.com";
  jest.mock("axios");
  Axios.get = jest.fn();
  Axios.delete = jest.fn();
  Axios.post = jest.fn();
  Axios.put = jest.fn();


  // ADD MOVIE

  it("fetches successfully data from an API for Add Movie", () => {
    const data = {
      "title": "TEST",
      "release_date": "2020-10-28",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "runtime": 220,
      "overview": "TEST OVER"
    };
    const responseData = {
      "title": "TEST",
      "release_date": "2020-10-29",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "overview": "TEST OVER",
      "runtime": 120,
      "id": 1602354294588
    };
    axios.post(API, data).mockImplementationOnce(() => Promise.resolve(data));
    expect(movieService.addMovie(data)).resolves.toEqual(responseData);
    expect(axios.post).toHaveBeenCalledWith(
      `${API}/`
    );
  });

  it("fetches erroneously data from an API for Add Movie", () => {
    const data = {
      "title": "TEST",
      "release_date": "2020-10-28",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "runtime": 220,
      "overview": "TEST OVER"
    };
    const errorMessage = "Network Error";
    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(movieService.addMovie(data)).rejects.toThrow(errorMessage);
  });

  // DELETE MOVIE

  it("fetches successfully data from an API for Delete Movie", (url) => {
    const data = {
      "id": 181808
    };
    axios.delete(url).mockImplementationOnce(() => Promise.resolve(data));
    expect(movieService.deleteMovie(181808)).resolves.toEqual(null);
    expect(axios.delete).toHaveBeenCalledWith(
      `${API}/`
    );
  });

  it("fetches erroneously data from an API for Delete Movie", () => {
    const errorMessage = "Network Error";
    axios.delete.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(movieService.deleteMovie(181808)).rejects.toThrow(errorMessage);
  });

  // EDIT MOVIE

  it("fetches successfully data from an API for Edit Movie", () => {
    const data = {
      "id": 181808,
      "title": "TEST",
      "release_date": "2020-10-28",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "runtime": 220,
      "overview": "TEST OVER"
    };

    axios.put(API, data).mockImplementationOnce(() => Promise.resolve(data));
    expect(movieService.editMovie(data)).resolves.toEqual(data);
    expect(axios.put(API, data)).toHaveBeenCalledWith(
      `${API}/`
    );
  });

  it("fetches erroneously data from an API for Edit Movie", () => {
    const errorMessage = "Network Error";
    const data = {
      "id": 181808,
      "title": "TEST",
      "release_date": "2020-10-28",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "runtime": 220,
      "overview": "TEST OVER"
    };
    axios.put.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(movieService.editMovie(data)).rejects.toThrow(errorMessage);
  });

  // DET MOVIE BY ID

  it("fetches successfully data from an API for get movie by id", () => {
    const data = {
      "id": 181808,
      "title": "TEST",
      "release_date": "2020-10-28",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "runtime": 220,
      "overview": "TEST OVER"
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    expect(movieService.getMovieById(181808)).resolves.toEqual(data);
    expect(axios.get(API)).toHaveBeenCalledWith(
      `${API}/`
    );
  });

  it("fetches erroneously data from an API for get movie by id", () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(movieService.getMovieById(181808)).rejects.toThrow(errorMessage);
  });

  // GET MOVIES BY SEARCH STRING

  it("fetches successfully data from an API for get movie by search string", () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    expect(movieService.getMovieBySearchString("jedi")).resolves.toEqual(data);
    expect(axios.get(API)).toHaveBeenCalledWith(
      `${API}/`
    );
  });

  it("fetches erroneously data from an API for get movie by search string", () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(movieService.getMovieBySearchString("jedi")).rejects.toThrow(errorMessage);
  });

  // GET MOVIES

  it("fetches successfully data from an API for get movies", () => {
    const data = {
      "id": 181808,
      "title": "TEST",
      "release_date": "2020-10-28",
      "poster_path": "https://sway.office.com/s/oO2X5YxlFa2QRDrd/images/DFTY2H4YQuABEo?quality=750&allowAnimation=true",
      "genres": ["Comedy", "Crime", "Documentary", "Horror"],
      "runtime": 220,
      "overview": "TEST OVER"
    };
    const query = "";
    const searchBy = "title";
    const limit = 20;
    const offset = 0;
    const sortBy = "title";
    const sortOrder = "asc";
    const genre = [];
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    expect(movieService.getMovies({
      query,
      searchBy,
      limit,
      offset,
      sortBy,
      sortOrder,
      genre
    })).resolves.toEqual(data);
    expect(axios.get(API)).toHaveBeenCalledWith(
      `${API}/`
    );
  });

  it("fetches erroneously data from an API for get movies", () => {
    const errorMessage = "Network Error";
    const query = "";
    const searchBy = "title";
    const limit = 20;
    const offset = 0;
    const sortBy = "title";
    const sortOrder = "asc";
    const genre = [];
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    expect(movieService.getMovies({
      query,
      searchBy,
      limit,
      offset,
      sortBy,
      sortOrder,
      genre
    })).rejects.toThrow(errorMessage);
  });

});
