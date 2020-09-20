import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Constants from '../../../constants';
import '../css/InputPassword.css';

export default function InputPassword({ title }) {

  const [showPassword, setShowPassword] = useState(false);
  const LOGIN_PASSWORD_ID = 'login-password';

  const showHidePassword = () => {
    if (showPassword) {
      document.getElementById(LOGIN_PASSWORD_ID).type = 'text';
      setShowPassword(false);
    } else {
      document.getElementById(LOGIN_PASSWORD_ID).type = 'password';
      setShowPassword(true);
    }
  };

  const validate = () => {

  };

  return (
    <>
      <label htmlFor="login-password" className="input-email-password">
        {title}
        <input type="password"
               id="login-password"
               className="input-password"
               onChange={validate}/>
        <button type="button" className="handle-password" onClick={showHidePassword}>
          {showPassword ? <img className="eye-img" src={Constants.PASSWORD_HANDLE[1]} alt="show"/> :
            <img className="eye-img" src={Constants.PASSWORD_HANDLE[0]} alt="show"/>}
        </button>
      </label>
    </>
  );

}

InputPassword.propTypes = {
  title: PropTypes.string.isRequired,
};
