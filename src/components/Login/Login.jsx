import React from 'react';
import './style.css';
import InputEmail from '../InputEmail';
import InputPassword from '../InputPassword';

export default function Login() {

  const handleSubmit = () => {

  };

  const reset = () => {

  };

  const submit = () => {

  };

  const loginValidate = () => {

  };

  const passwordValidate = () => {

  };

  return (
    <>
      <form onSubmit={() => handleSubmit}>
        <section className="login-modal">
          <p className="modal-title">LOG IN</p>
          <InputEmail title="USER ID*"
                      visibility=""
                      onChange={loginValidate}/>
          <InputPassword title="PASSWORD*"
                         visibility=""
                         onChange={passwordValidate}/>
          <div className="add-movie-actions">
            <button type="button"
                    className="reset-button"
                    onClick={() => reset}>RESET
            </button>
            <button type="button"
                    className="submit-button"
                    onClick={() => submit}>SUBMIT
            </button>
          </div>
          <p className="mandatory">*Mandatory</p>
        </section>
      </form>
    </>
  );

}
