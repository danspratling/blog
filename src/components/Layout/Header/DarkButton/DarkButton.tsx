/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'

const DarkButton = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <label sx={style.switch}>
      <input
        type="checkbox"
        sx={style.input}
        onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      />
      <span
        sx={{
          ...style.button,
          ...(colorMode === 'light' ? style.button.light : style.button.dark),
        }}
      ></span>
    </label>
  )
}

const style = {
  switch: {
    position: 'absolute',
    display: 'inline-block',
    cursor: 'pointer',
    top: 20,
    right: 20,
    width: 60,
    height: 34,
    border: '2px solid',
    borderColor: 'background',
    bg: 'transparent',
    transition: '0.4s',
    zIndex: 100,
    borderRadius: 2,
  },
  input: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  button: {
    position: 'absolute',
    height: 26,
    width: 26,
    top: '2px',
    bottom: '2px',
    backgroundColor: 'background',
    transition: '0.4s',
    borderRadius: '2',
    light: {
      left: '2px',
    },
    dark: {
      left: '28px',
    },
  },
}

export default DarkButton
