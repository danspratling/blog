/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = ({ children }) => {
  return (
    <div
      sx={{
        ml: "auto",
        mr: "auto",
        maxWidth: theme => theme.breakpoints,
        pl: 3,
        pr: 3,
      }}
    >
      {children}
    </div>
  )
}

export default Container
