import React from 'react';
import PropTypes from 'prop-types';
import '../css/NotFoundPage.css';
import notFoundImage from '../../../../public/images/404.png';

export default function NotFoundPage({ BackLink }) {

  return (
    <>
      <div className="page-not-found">
        <h1 className="page-not-found-title">Page not found</h1>
        <img src={notFoundImage} alt="not found"/>
        {BackLink}
      </div>
    </>
  );

}

NotFoundPage.propTypes = {
  BackLink: PropTypes.node.isRequired,
};
