import React from 'react';
import '../css/Brand.css';

export default function Brand() {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="brand">
        <p className="brand-title">
          <a id="blink" className="brand-title-name" href=" #" onClick={reloadPage}>netflix</a>
          roulette
        </p>
      </div>
    </>
  );

}
