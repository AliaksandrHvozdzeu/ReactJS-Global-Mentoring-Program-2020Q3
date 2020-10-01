import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import notFoundImage from '../../../../public/images/404.png';
import BackButton from '../../BackButton';
import '../css/NotFoundPage.css';

export default function NotFoundPage({message}) {

  const backLink = (
    <Link to="/">
      <BackButton/>
    </Link>
  );

  return (
    <>
      <div className="page-not-found">
        <h1 className="page-not-found-title">{message}</h1>
        <img src={notFoundImage} alt="not found"/>
        {backLink}
      </div>
    </>
  );

}

NotFoundPage.propTypes = {
  message: PropTypes.string.isRequired,
}
