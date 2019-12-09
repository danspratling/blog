/** @jsx jsx */
import { jsx } from 'theme-ui'

const Row = ({ className, children }) => {
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
