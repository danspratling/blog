/** @jsx jsx */
// import React from "react"
import { jsx } from 'theme-ui'

const Row = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        ml: theme => theme.space[3] * -1,
        mr: theme => theme.space[3] * -1,
        flexWrap: 'wrap',
      }}
    >
      {children}
    </div>
  )
}

export default Row
