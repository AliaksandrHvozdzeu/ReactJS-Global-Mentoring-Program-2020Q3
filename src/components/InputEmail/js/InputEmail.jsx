import React from 'react';
import PropTypes from 'prop-types';
import '../css/InputEmail.css';

export default function InputEmail({ title }) {

  return (
    <>
      <label htmlFor="login-email" className="input-email-label">
        {title}
        <input type="email"
               id="login-email"
               className="input-email"/>
      </label>
    </>
  );

}

InputEmail.propTypes = {
  title: PropTypes.string.isRequired,
};
