/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider, useThemeUI } from 'theme-ui'
import renderer from 'react-test-renderer'
import Hero from './Hero'
import baseTheme from '../../gatsby-plugin-theme-ui'

const theme = {
  colors: baseTheme.colors,
  breakpoints: baseTheme.breakpoints,
}

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Hero />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
