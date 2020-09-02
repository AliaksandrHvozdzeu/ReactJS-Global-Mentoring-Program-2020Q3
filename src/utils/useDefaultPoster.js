import React, { useEffect, useState } from 'react';
import Constants from '../constants';

const useDefaultPoster = (src, alt, className) => {

  const [path, setPath] = useState(src);

  function replaceToFallPoster() {
    setPath(Constants.NOT_FOUND_POSTER);
  }

  useEffect(() => setPath(src), [src]);

  return (
    <>
      <img className={className}
           src={path}
           alt={alt}
           onError={replaceToFallPoster}
      />
    </>
  );

}

export default useDefaultPoster;
