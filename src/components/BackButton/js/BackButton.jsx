import React  from 'react';
import '../css/AddButton.css';

const BackButton = () => {

  const onBackClick = () => {
    console.log("BACK");
  };

  return (
    <div className="App">
      <button type="button" className="back-button" onClick={onBackClick}>Back</button>
    </div>
  );
};

export default BackButton;
