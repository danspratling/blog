/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { DarkButton } from '.'

const Header = () => {
  const path = typeof window !== undefined ? window.location.pathname : ''

  return (
    <header>
      {path && path !== '/' ? (
        <Link to="/">
          <FontAwesomeIcon icon={faHome} sx={style.icon} />
        </Link>
      ) : null}
      <DarkButton />
    </header>
  )
}

export default Header

const style = {
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 4,
    color: 'background',
    zIndex: 1,
  },
}
