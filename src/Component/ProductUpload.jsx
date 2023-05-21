import React, { useState, useRef } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import './Imageprev.css';
const PhotoUplaod = () => {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone (dataUri) {
    setDataUri(dataUri);
  }

  const isFullscreen = false;
  return (
    <div>
    {
      (dataUri)
        ? <ImagePreview dataUri={dataUri}
          isFullscreen={isFullscreen}
        />
        : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
        />
    }
  </div>
  );
};

export default PhotoUplaod;





export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

  return (
    <div className={'demo-image-preview ' + classNameFullscreen}>
      <img src={dataUri} />
    </div>
  );
};



