import React, { useState, useEffect, useRef } from 'react'
import ScrollMagic from 'scrollmagic'
import styled from 'styled-components'

import Download from '../home/Download'
import Cover from '../home/Cover'
import Footer from '../structure/Footer'
import Navbar from '../structure/Navbar'

const Example = () => {
  const [zoomLevel, setZoomLevel] = useState(1) // Inicializa el nivel de zoom a 1 (100%)
  const controller = useRef(null)

  useEffect(() => {
    if (!controller.current) {
      controller.current = new ScrollMagic.Controller({
        globalSceneOptions: {
          triggerHook: 'onLeave',
        },
      })
    }

    const handleResize = () => {
      // Actualiza el nivel de zoom y el controlador
      const newZoomLevel = window.innerWidth / window.screen.width
      setZoomLevel(newZoomLevel)
      controller.current.update()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    // Configura escenas ScrollMagic
    const slides = document.querySelectorAll('.panel')

    slides.forEach((slide, index) => {
      new ScrollMagic.Scene({
        triggerElement: slide,
      })
        .setPin(slide, { pushFollowers: true })
        .addTo(controller.current)
    })
  }, [])

  return (
    <>
      <Navbar />
      <div id="content">
        <Section zoom={zoomLevel}>
          <CoverContent>
            <Cover />
          </CoverContent>
        </Section>

        <div id="section-wipes">
          <Section>
            <CubeContent />
          </Section>

          <Section>
            <IntoContent />
          </Section>

          <Section>
            <CardsContent />
          </Section>

          <Section>
            <IntoContent />
          </Section>

          <footer className="panel">
            <Download />
            <Footer />
          </footer>
        </div>
      </div>
    </>
  )
}

const Section = styled.section`
  height: ${props => (props.zoom > 1 ? '100vh' : '180vh')};
  overflow: hidden;
  position: relative;
`

const CoverContent = styled.div`
  height: 100%;
`

const CubeContent = styled.div`
  height: 100%;
  background-color: red;
`

const IntoContent = styled.div`
  height: 100%;
  background-color: yellow;
`

const CardsContent = styled.div`
  height: 100%;
  background-color: blue;
`

export default Example
