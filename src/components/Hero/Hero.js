/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Row, Col } from '../'

const Hero = ({ children }) => (
  <div
    sx={{
      display: 'flex',
      alignItems: 'center',
      color: 'background',
      backgroundColor: 'primary',
      padding: 4,
      minHeight: '60vw',
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
)

export default Hero
