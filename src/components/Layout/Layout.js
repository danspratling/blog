/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import { Fragment } from 'react'
import { Container, Row, Col } from '..'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={theme => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          'ul[class], ol[class]': {
            listStyle: 'none',
          },
          img: {
            maxWidth: '100%',
            display: 'block',
          },
          a: {
            boxShadow: 'none',
          },
          'article > * + *': {
            mt: '1em',
          },
          'input, button, textarea, select': {
            font: 'inherit',
          },
          body: {
            fontFamily: theme.fonts.body,
            margin: 0,
            minHeight: '100vh',
          },
          'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
          },
          h1: {
            fontSize: theme.fontSizes[6],
          },
          h2: {
            fontSize: theme.fontSizes[5],
          },
          h3: {
            fontSize: theme.fontSizes[4],
          },
          h4: {
            fontSize: theme.fontSizes[3],
          },
        })}
      />
      <header>{/*Some nav here*/}</header>
      <main>{children}</main>
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
    </Fragment>
  )
}

export default Layout
