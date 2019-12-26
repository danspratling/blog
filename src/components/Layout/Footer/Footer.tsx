/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Row, Col } from '../../Grid'

const Footer = () => {
  return (
    <footer sx={{ mt: 4 }}>
      <Container>
        <Row>
          <Col sx={{ textAlign: 'center' }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
