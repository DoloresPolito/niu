import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import useWindowSize from "../hooks/useWindowSize";

const SmoothScroll = ({ children }) => {
  // 1.
  const windowSize = useWindowSize();

  //2.
  const scrollingContainerRef = useRef();

  // 3.
  const data = {
    ease: 0.9,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {

    console.log("BODY HEIGHT")
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
  
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;

    scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <ScrollContainer>
      <div ref={scrollingContainerRef}>{children}</div>
    </ScrollContainer>
  );
};


const ScrollContainer = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

`

export default SmoothScroll;
