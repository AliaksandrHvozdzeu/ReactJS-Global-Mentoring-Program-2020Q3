import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const validate = () => {

};

const InputEmail = ({title }) => (
  <label htmlFor="login-email" className="input-email-label">
    {title}
    <input type="email"
           id="login-email"
           className="input-email"
           onChange={validate}/>
  </label>
);

InputEmail.propTypes = {
  title: PropTypes.string.isRequired
};

export default InputEmail;
