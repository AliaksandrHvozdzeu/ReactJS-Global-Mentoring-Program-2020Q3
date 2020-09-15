import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../CloseButton';
import useDefaultPoster from '../../../hooks/useDefaultPoster';
import '../css/PosterPreview.css';

export default function PosterPreview({ isOpen, onClose, src, alt, fallback }) {

  const className = 'preview-poster-image';

  const previewImage = useDefaultPoster(src, alt, className, fallback);

  return (
    <>
      {isOpen && (
        <div className="poster-preview-overlay">
          <div className="poster-preview-body">
            <section className="congratulation-poster">
              <CloseButton closeAction={onClose}/>
              {previewImage}
            </section>
          </div>
        </div>
      )}
    </>
  );


}

PosterPreview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
};
