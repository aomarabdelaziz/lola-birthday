import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, audio } from '../assets';

import { Link } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';

// Add your own images by putting them in the assets folder and import them.
const images = [
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
  picture8
];

function Picture() {
  const [loadedImages, setLoadedImages] = useState(0);

  // Add an audio ref
  const audioRef = React.useRef(new Audio(audio)); // Replace with the correct path to your audio file

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
    audioRef.current.play(); // Play sound when an image is loaded
  };

  const allImagesLoaded = loadedImages === images.length;

  return (
    <SectionWrapper>
      <Link to="/card">
        <p className="absolute text-4xl font-bold text-customBlue inset-0 flex justify-center items-center text-center transform rotate-6 cursor-pointer">
          You're Getting Old! :P
        </p>
      </Link>

      {!allImagesLoaded && (
        <div className="absolute inset-0 flex justify-center items-center">
          <p className="text-xl font-medium text-gray-500">Loading images...</p>
        </div>
      )}

      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            zIndex: images.length - index,
          }}
          initial={{
            scale: 1,
            rotate: Math.random() * 20 - 10,
          }}
          whileDrag={{
            scale: 1.05,
            rotate: Math.random() * 20 - 10,
          }}
          drag
        >
          <img
            src={image}
            alt={`Stacked image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            onLoad={handleImageLoad} // Increment the counter and play sound on image load
          />
        </motion.div>
      ))}
    </SectionWrapper>
  );
}

export default Picture;
