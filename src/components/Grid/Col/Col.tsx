/** @jsx jsx */
import { jsx } from 'theme-ui'

type colSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface propTypes {
  xs?: colSizeType
  sm?: colSizeType
  md?: colSizeType
  lg?: colSizeType
  xl?: colSizeType
  sx?: {}
  className?: string
  children: any
}

const Col = ({ xs, sm, md, lg, xl, sx, className, children }: propTypes) => {
  /**
   * We want the 'flex' css property to return '1 0 xx%' unless a colWidth has not been set
   * in which case we only want the first result to return '1 0 100%' (to ensure all boxes are fully stretched)
   */

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

const calcWidth = (colWidth: colSizeType | undefined) => {
  if (colWidth === undefined) {
    return null
  }

  return `${(colWidth / 12) * 100}%`
}

const calcFlex = (colWidth: colSizeType | undefined) => {
  if (colWidth === undefined) {
    return null
  }

  return `1 0 ${(colWidth / 12) * 100}%`
}
