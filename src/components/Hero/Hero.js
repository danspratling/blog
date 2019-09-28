/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Row, Col } from '../'
import theme from '../../gatsby-plugin-theme-ui'

const Hero = ({ children }) => {
  const { colors } = theme
  return (
    <div
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: '160px',
        px: 4,
        pb: 4,
        height: '60vw',
        maxHeight: '420px',
      }}
    >
      {/*
        TODO: Animate the border of this box when the user first sees it
      */}
      <div
        sx={{
          padding: 4,
          borderWidth: 6,
          borderStyle: 'solid',
          borderColor: 'secondary',
          backgroundColor: 'background',
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1 sx={{ fontSize: 7, textAlign: 'center', mt: 3, mb: 3 }}>
                {children}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: `66.66%`,
          backgroundColor: 'primary',
          backgroundImage: `linear-gradient(to top, ${colors.primary}, ${colors.primaryGradient})`,
          zIndex: -1,
        }}
      />
    </div>
  )
}

export default Hero
