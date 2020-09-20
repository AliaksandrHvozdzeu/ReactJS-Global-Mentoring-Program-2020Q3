import React, { useEffect, useState } from 'react';

const useDefaultPoster = (src, alt, className, fallback, onClick, onKeyDown) => {

  const [path, setPath] = useState(src);

  const replaceToFallPoster = () => setPath(fallback);

  useEffect(() => setPath(src), [src]);

  return (
    <>
      <img className={className}
           src={path}
           alt={alt}
           onError={replaceToFallPoster}
           onClick={onClick}
           onKeyDown={onKeyDown}
      />
    </>
  );

};

export default useDefaultPoster;
