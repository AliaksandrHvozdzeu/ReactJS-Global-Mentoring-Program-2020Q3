import React from 'react';
import './style.css';
import InputEmail from '../InputEmail';
import InputPassword from '../InputPassword';

const Login = () => (
  <>
    <form onSubmit={() => console.log('form submitted')}>
      <section className="login-modal">
        <p className="modal-title">LOG IN</p>
        <InputEmail title="USER ID*"
                    visibility=""
                    onChange={console.log('Validate')}/>
        <InputPassword title="PASSWORD*"
                       visibility=""
                       onChange={console.log('Validate')}/>
        <div className="add-movie-actions">
          <button className="reset-button"
                  onClick={() => console.log('Reset action')}>RESET
          </button>
          <button className="submit-button"
                  onClick={() => console.log('Submit action')}>SUBMIT
          </button>
        </div>
        <p className="mandatory">*Mandatory</p>
      </section>
    </form>
  </>
);

export default Login;
