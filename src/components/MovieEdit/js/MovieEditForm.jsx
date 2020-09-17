import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import CloseButton from '../../CloseButton';
import Text from '../../Text';
import Input from '../../Input';
import Calendar from '../../Calendar';
import MultiSelect from '../../MultiSelectInput';
import ResetButton from '../../ResetButton';
import Constants from '../../../constants';

const MovieEditForm = (
  {
    closeAction,
    modalTitle,
    initialState = {},
    availableGenres,
    onSubmit,
  },
) => {

  const onSave = useCallback((data) => {
    onSubmit(data);
    closeAction();
  }, [onSubmit]);

  const schema = Yup.object().shape({
    title: Yup.string().required(Constants.FORMIK_ERRORS.title),
    poster_path: Yup.string().url().required(Constants.FORMIK_ERRORS.poster_path),
    overview: Yup.string().required(Constants.FORMIK_ERRORS.overview),
    runtime: Yup.number()
      .min(0)
      .required(Constants.FORMIK_ERRORS.runtime),
    release_date: Yup.string()
      .transform((value) => {
        const dateValue = moment(value);
        return dateValue.isValid() ? dateValue.format(Constants.FORMIK_ERRORS.DEFAULT_DATE_FORMAT) : '';
      })
      .required(Constants.FORMIK_ERRORS.release_date),
    genres: Yup.array().min(1).required(Constants.FORMIK_ERRORS.genre),
  });

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: onSave,
  });

  const onSelectStateChange = useCallback(
    (values) => {
      const genres = values.map((item) => item.value);
      formik.setFieldValue('genres', genres, true);
    },
    [formik],
  );

  const getErrorMessageByField = useCallback(
    (fieldName) => {
      if (formik.touched[fieldName] && formik.errors[fieldName]) {
        return formik.errors[fieldName];
      }
      return '';
    },
    [formik],
  );

  return (
    <>
      <CloseButton closeAction={closeAction}/>
      <form className="add-movie" onSubmit={formik.handleSubmit}>
        <p className="modal-title">{modalTitle}</p>
        <Text title="Movie id"
              value={formik.values.id}
              name="id"
              id="movie-id"/>
        <Input id="movie-title"
               title="Title"
               name="title"
               type="text"
               visibility=""
               value={formik.values.title}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={getErrorMessageByField('title')}/>
        <Calendar id="movie-release"
                  title="Release date"
                  name="release_date"
                  type="date"
                  value={formik.values.release_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={getErrorMessageByField('release_date')}/>
        <Input id="movie-url"
               title="Movie url"
               visibility=""
               name="poster_path"
               type="url"
               value={formik.values.poster_path}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={getErrorMessageByField('poster_path')}/>
        <MultiSelect title="genre"
                     options={availableGenres}
                     onAction={onSelectStateChange}
                     preselected={formik.values.genres}
                     onBlur={formik.handleBlur}
                     error={getErrorMessageByField('genre')}/>
        <Input id="movie-overview"
               title="Overview"
               visibility=""
               type="text"
               name="overview"
               value={formik.values.overview}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={getErrorMessageByField('overview')}/>
        <Input id="movie-runtime"
               title="Runtime"
               visibility=""
               name="runtime"
               type="number"
               value={formik.values.runtime}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               error={getErrorMessageByField('runtime')}/>
        <div className="add-movie-actions">
          <ResetButton onReset={formik.resetForm}/>
          <button type="button"
                  className="submit-button"
                  onClick={formik.handleSubmit}>SAVE
          </button>
        </div>
      </form>
    </>
  );

};

MovieEditForm.propTypes = {
  closeAction: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  initialState: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
  availableGenres: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieEditForm;
