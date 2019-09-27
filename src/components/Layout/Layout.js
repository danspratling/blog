/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"

const Layout = ({ children }) => {
  return (
    <Fragment>
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
