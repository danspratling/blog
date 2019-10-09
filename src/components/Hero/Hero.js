/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from '..'
import { HeroTitleSVG } from '.'

const Hero = ({ children }) => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => setPageLoaded(true), [])

  const heroStyles = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: '160px',
    px: 4,
    pb: 4,
    height: '60vw',
    maxHeight: '420px',
  }

  const pathStyles = {
    path: {
      strokeDasharray: 300,
      strokeDashoffset: pageLoaded ? 0 : 300,
      transition: '1.8s ease',
    },
  }

  return (
    <div sx={heroStyles}>
      <Container>
        <Row>
          <Col>
            <HeroTitleSVG sx={pathStyles} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
