/** @jsx jsx */
import { jsx } from 'theme-ui'

interface propTypes {
  sx?: {}
  className?: string
  children: any
}

const Container = ({ sx, className, children }: propTypes) => {
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
