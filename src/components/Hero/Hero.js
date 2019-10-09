/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { Container, Row, Col } from '..'
import { HeroTitleSVG } from '.'

const Hero = ({ children }) => {
  const { theme } = useThemeUI()

  const line = keyframes`
    to {
      stroke-dashoffset: 0
    }
  `

  const fill = keyframes`
    from {
      fill: transparent
    }
    to {
      fill: ${theme.colors.primary}
    }
  `

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
      stroke: 'primary',
      strokeDasharray: 300,
      strokeDashoffset: 300,
      animation: `${line} 2s ease forwards, ${fill} 0.5s ease forwards 2s`,
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
