/** @jsx jsx */
// import React from "react"
import { jsx } from 'theme-ui'

const Col = ({ xs, sm, md, lg, xl, className, children }, props) => {
  const calcWidth = colWidth => {
    if (colWidth === undefined) {
      return null
    }

    return `${(colWidth / 12) * 100}%`
  }

  /**
   * We want the 'flex' css property to return '1 0 xx%' unless a colWidth has not been set
   * in which case we only want the first result to return '1 0 100%' (to ensure all boxes are fully stretched)
   */
  const calcFlex = colWidth => {
    if (colWidth === undefined) {
      return null
    }

    return `1 0 ${(colWidth / 12) * 100}%`
  }

  return (
    <div
      className={className}
      sx={{
        pl: 3,
        pr: 3,
        width: '100%',
        maxWidth: [
          calcWidth(xs),
          calcWidth(sm),
          calcWidth(md),
          calcWidth(lg),
          calcWidth(xl),
        ],
        flex: [
          calcFlex(xs) || '100%',
          calcFlex(sm),
          calcFlex(md),
          calcFlex(lg),
          calcFlex(xl),
        ],
      }}
    >
      {children}
    </div>
  )
}

export default Col
