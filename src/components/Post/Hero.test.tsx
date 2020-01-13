/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider, useThemeUI } from 'theme-ui'
import renderer from 'react-test-renderer'
import Post from './Post'

const data = {
  excerpt: 'the excerpt',
  fields: {
    slug: 'http://example.com',
  },
  frontmatter: {
    title: 'the title',
    description: 'the description',
    date: '22/06/1994',
  },
}

describe('Post', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        // <ThemeProvider theme={theme}>
        <Post node={data} />
        // </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
