/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { Container, Row, Col } from '..'
import { HeroTitleSVG } from '.'

const Hero = ({ children }) => {
  const { theme } = useThemeUI()
  const style = useStyle(theme)

  return (
    <div sx={style.hero}>
      <Container>
        <Row>
          <Col sx={{ textAlign: 'center' }}>
            <HeroTitleSVG sx={style.svg} />
            <h2 sx={{ fontWeight: 'normal' }}>
              Follow my journey as we learn new Frontend techniques.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero

const useStyle = theme => {
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
      fill: ${theme.colors.white}
    }
  `

  return {
    hero: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pt: '160px',
      pb: '160px',
      px: 4,
      height: '68vh',
      maxHeight: '800px',
      minHeight: '520px',
      color: 'white',
      backgroundColor: 'primary',
      backgroundImage: theme =>
        `linear-gradient(to bottom left, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
    },
    svg: {
      stroke: 'white',
      strokeDasharray: 300,
      strokeDashoffset: 300,
      animation: `${line} 2s ease forwards, ${fill} 0.5s ease forwards 2s`,
    },
  }
}
