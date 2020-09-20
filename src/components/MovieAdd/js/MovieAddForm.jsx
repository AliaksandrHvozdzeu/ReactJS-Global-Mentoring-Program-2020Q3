import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../CloseButton';
import Input from '../../Input';
import Calendar from '../../Calendar';
import MultiSelect from '../../MultiSelectInput';
import ResetButton from '../../ResetButton';

const convertBasedOnType = (type, value) => {
  return type === 'number' ? +value : value;
};

const MovieAddForm = (
  {
    closeAction,
    modalTitle,
    initialState = {},
    availableGenres,
    onSubmit,
  },
) => {

  const [data, setData] = useState({ ...initialState });

  const onDataChange = useCallback(
    ({ target: { name, value, type } }) => {
      setData({ ...data, [name]: convertBasedOnType(type, value) });
    },
    [data],
  );

  const onSelectStateChange = useCallback(
    (key) => (values) => {
      const genres = values.map((item) => item.value);
      setData({ ...data, [key]: genres });
    },
    [data, setData],
  );

  const onSave = useCallback(() => {
    onSubmit(data);
    closeAction();
  }, [data, onSubmit]);

  const onReset = useCallback(() => {
    setData(initialState);
  }, [
    initialState,
    setData,
  ]);

  return (
    <>
      <CloseButton closeAction={closeAction}/>
      <form className="add-movie" onSubmit={onSave}>
        <p className="modal-title">{modalTitle}</p>
        <Input id="movie-title"
               title="Title"
               name="title"
               type="text"
               visibility=""
               value={data.title}
               onChange={onDataChange}/>
        <Calendar id="movie-release"
                  title="Release date"
                  name="release_date"
                  type="date"
                  value={data.release_date}
                  onChange={onDataChange}/>
        <Input id="movie-url"
               title="Movie url"
               visibility=""
               name="poster_path"
               type="url"
               value={data.poster_path}
               onChange={onDataChange}/>
        <MultiSelect title="genre"
                     options={availableGenres}
                     onAction={onSelectStateChange('genres')}
                     preselected={data.genres}/>
        <Input id="movie-overview"
               title="Overview"
               visibility=""
               type="text"
               name="overview"
               value={data.overview}
               onChange={onDataChange}/>
        <Input id="movie-runtime"
               title="Runtime"
               visibility=""
               name="runtime"
               value={data.runtime}
               type="number"
               onChange={onDataChange}/>
        <div className="add-movie-actions">
          <ResetButton onReset={onReset}/>
          <button type="button"
                  className="submit-button"
                  onClick={() => onSave()}>SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

MovieAddForm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  initialState: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  availableGenres: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

MovieAddForm.defaultProps = {
  initialState: {},
};

export default MovieAddForm;
