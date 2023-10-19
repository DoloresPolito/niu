import React from "react";
import styled from "styled-components";
import Navbar from "../structure/Navbar";
import Footer from "../structure/Footer";
import Players from "../n1uverse/Players";
import Store from "../n1uverse/Store";
import N1uverseCover from "../n1uverse/N1uverseCover";
import Comunity from "../n1uverse/Comunity";

const N1uverse = () => {
  // const [scrollDelay, setScrollDelay] = useState(false);
  // const sectionRefs = [useRef(), useRef(), useRef()];
  // const scrollTimeout = 1000; // Tiempo de retraso en milisegundos

  // const handleScroll = () => {
  //   if (!scrollDelay) {
  //     setScrollDelay(true);
  //     setTimeout(() => setScrollDelay(false), scrollTimeout);

  //     // Encuentra la siguiente sección para desplazarse
  //     const currentY = window.scrollY;
  //     const nextSection = sectionRefs.find(
  //       (ref) => ref.current.offsetTop > currentY
  //     );

  //     if (nextSection) {
  //       window.scrollTo({
  //         top: nextSection.current.offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollDelay]);

  return (
    <>
      <N1uverseSection>
        <Navbar />

        {/* <div ref={sectionRefs[0]}> */}
          <N1uverseCover />
        {/* </div>
        <div ref={sectionRefs[1]}> */}
          <Comunity />
        {/* </div>
        <div ref={sectionRefs[2]}> */}
          <Players />
        {/* </div> */}

        <Store />

        <Footer />
      </N1uverseSection>
    </>
  );
};

const N1uverseSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: auto;
  background-color: black;
`;

export default N1uverse;
