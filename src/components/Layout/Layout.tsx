/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Fragment } from 'react'
import { Global, Header, Footer } from '.'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Global />
      <Header />

      <main>{children}</main>

      <Footer />
    </Fragment>
  )
}

export default Layout
