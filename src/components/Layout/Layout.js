/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Global } from '@emotion/core'
import { Fragment } from 'react'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global
        styles={theme => ({
          h1: {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
            fontSize: theme.fontSizes[6],
          },
          h2: {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
            fontSize: theme.fontSizes[5],
          },
          h3: {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
            fontSize: theme.fontSizes[4],
          },
          h4: {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
            fontSize: theme.fontSizes[3],
          },
          h5: {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
          },
          h6: {
            fontFamily: theme.fonts.heading,
            fontWeight: theme.fontWeights.heading,
          },
          body: {
            fontFamily: theme.fonts.body,
          },
          a: {
            boxShadow: 'none',
          },
        })}
      />
      <header>{/*Some nav here*/}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Fragment>
  )
}

export default Layout
