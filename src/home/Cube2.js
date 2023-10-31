import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CubeContainer = styled.div`
  width: 100px; /* Ajusta el tamaño del cubo según tus necesidades */
  height: 100px;
  position: relative;
  /* animation: rotate 2s linear infinite; */

`;

const CubeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.5s;
`;

const Cube = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300); // Velocidad de cambio de imagen en milisegundos

    return () => clearInterval(interval);
  }, [images]);

  return (
    <CubeContainer>
      {images.map((image, index) => (
        <CubeImage
          key={index}
          src={image}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}
    </CubeContainer>
  );
};

export default Cube;