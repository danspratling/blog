/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Post = ({ node }) => (
  <article
    key={node.fields.slug}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 3,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'primary',
      borderRadius: 5,
      mb: 3,
    }}
  >
    <header>
      <h3
        sx={{
          my: 2,
        }}
      >
        <Link sx={{ boxShadow: `none` }} to={node.fields.slug}>
          {node.frontmatter.title || node.fields.slug}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
    </header>
    <section>
      <p
        sx={{
          mb: 0,
        }}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </section>
  </article>
)

export default Post
