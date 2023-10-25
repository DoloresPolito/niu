import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const Container = styled.div`
  position: relative;
  width: auto;
  height: auto;
  background-color: transparent;
  overflow: hidden;
`;

const MovingComponent = ({ children }) => {
  const springConfig = {
    from: { x: 0, y: 0 },
    to: { x: 30, y: 30 },
    loop: { reverse: true },
    config: { duration: 2000 },

  };

  const elementProps = useSpring(springConfig);

  return (
    <Container>
      <animated.div
        style={{
          transform: elementProps.y.interpolate((y) => `translate3d(0, ${y}px, 0)`),
        }}
      >
        {children}
      </animated.div>
    </Container>
  );
};

export default MovingComponent;
