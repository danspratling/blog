/** @jsx jsx */
import { jsx } from 'theme-ui'

const Container = ({ sx, className, children }) => {
  return (
    <div
      className={className}
      sx={{
        ml: 'auto',
        mr: 'auto',
        maxWidth: theme => [
          '100vw',
          ,
          theme.breakpoints[3],
          theme.breakpoints[4],
        ],
        pl: 3,
        pr: 3,
      }}
    >
      {children}
    </div>
  )
}

export default Container
