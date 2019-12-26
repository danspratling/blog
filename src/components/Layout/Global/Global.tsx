/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Global as EmotionGlobal } from '@emotion/core'

const Global = () => {
  return (
    <EmotionGlobal
      styles={theme => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        body: {
          fontFamily: theme.fonts.body,
          lineHeight: theme.lineHeights.body,
          letterSpacing: '.5px',
          margin: 0,
          minHeight: '100vh',
          color: theme.colors.text,
          backgroundColor: theme.colors.background,
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme.fonts.heading,
          // fontWeight: theme.fontWeights.heading,
          lineHeight: theme.lineHeights.heading,
        },
        h1: {
          fontSize: theme.fontSizes[6],
        },
        h2: {
          fontSize: theme.fontSizes[5],
        },
        h3: {
          fontSize: theme.fontSizes[4],
        },
        h4: {
          fontSize: theme.fontSizes[3],
        },
        'ul[class], ol[class]': {
          listStyle: 'none',
        },
        img: {
          maxWidth: '100%',
          display: 'block',
        },
        a: {
          color: theme.colors.primary,
          boxShadow: 'none',
        },
        'article > * + *': {
          mt: '1em',
        },
        'input, button, textarea, select': {
          font: 'inherit',
        },
      })}
    />
  )
}

export default Global
