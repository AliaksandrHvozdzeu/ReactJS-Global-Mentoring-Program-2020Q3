import React, { useCallback, useState } from 'react';
import Constants from '../../../constants';
import '../css/ScrollButton.css';

const ScrollButton = () => {

  const [notRef, setNotRef] = useState(Constants.ARROW_IMAGES_ARRAY[0].src);
  const [notAlt, setNotAlt] = useState(Constants.ARROW_IMAGES_ARRAY[0].alt);

  const maxHeight = window.innerHeight * window.innerHeight;

  const scroll = useCallback(() => {
    if (notRef === Constants.ARROW_IMAGES_ARRAY[0].src) {
      window.scrollTo({ top: maxHeight, behavior: 'smooth' });
      setNotRef(Constants.ARROW_IMAGES_ARRAY[1].src);
      setNotAlt(Constants.ARROW_IMAGES_ARRAY[1].alt);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      setNotRef(Constants.ARROW_IMAGES_ARRAY[0].src);
      setNotAlt(Constants.ARROW_IMAGES_ARRAY[0].alt);
    }
  }, [notRef]);

  return (
    <div role="presentation" onClick={scroll} className="scroll-button">
      <img id="image-scroll-button" src={notRef} alt={notAlt} className="scroll-button"/>
    </div>
  );

};

export default ScrollButton;
