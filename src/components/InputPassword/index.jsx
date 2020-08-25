import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Constants from '../../../constants';

const InputPassword = ({ title }) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const validate = () => {
    console.log('VALIDATE PASSWORD');
  };

  const handle = () => {
    if (showPassword) {
      document.getElementById('login-password').type = 'text';
      setShowPassword(false);
    } else {
      document.getElementById('login-password').type = 'password';
      setShowPassword(true);
    }
  };

  return (
    <>
      <label htmlFor="login-password" className="input-email-password">
        {title}
        <input type="password"
               id="login-password"
               className="input-password"
               onChange={validate}/>
        <a className="handle-password" onClick={handle}>
          {showPassword ? <img className="eye-img" src={Constants.PASSWORD_HANDLE[1]} alt="show"/> :
            <img className="eye-img" src={Constants.PASSWORD_HANDLE[0]} alt="show"/>}
        </a>
      </label>
    </>
  );


};

InputPassword.propTypes = {
  title: PropTypes.string.isRequired,
};

export default InputPassword;
