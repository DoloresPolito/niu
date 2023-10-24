import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollableElementContainer = styled.div`
  position: relative;
`;

const ScrollingElement = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const Content = styled.div`
  height: 2000px; /* Altura de ejemplo para que haya espacio para hacer scroll */
`;

const ScrollableElement = () => {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Puedes ajustar el valor 200 a la posición deseada en la que quieres que aparezca el elemento.
    if (window.scrollY > 200) {
      setShowElement(true);
    } else {
      setShowElement(false);
    }
  };

  return (
    <ScrollableElementContainer>
      <ScrollingElement show={showElement}>Elemento que sube</ScrollingElement>
      <Content>{/* Contenido de la página */}</Content>
    </ScrollableElementContainer>
  );
};

export default ScrollableElement;