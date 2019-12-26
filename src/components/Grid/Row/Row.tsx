/** @jsx jsx */
import { jsx } from 'theme-ui'

interface propTypes {
  sx?: {}
  className?: string
  children: any
}

const Row = ({ sx, className, children }: propTypes) => {
  return (
    <div className={className} sx={style.row}>
      {children}
    </div>
  )
}

export default Row

const style = {
  row: {
    display: 'flex',
    ml: theme => theme.space[3] * -1,
    mr: theme => theme.space[3] * -1,
    flexWrap: 'wrap',
  },
}
