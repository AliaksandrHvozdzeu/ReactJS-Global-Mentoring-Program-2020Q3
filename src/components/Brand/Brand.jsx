import React from 'react';
import './style.css';

export default function Brand() {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="brand">
        <p className="brand-title">
          <a id="blink" className="brand-title-name" onClick={reloadPage}>netflix</a>
          roulette
        </p>
      </div>
    </>
  );

}
