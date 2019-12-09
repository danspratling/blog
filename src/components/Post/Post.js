/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Post = ({ node }) => {
  return (
    <article key={node.fields.slug} sx={style.article}>
      <Link to={node.fields.slug} sx={style.link}>
        <h3 sx={style.header}>{node.frontmatter.title || node.fields.slug}</h3>
        <small>{node.frontmatter.date}</small>
        <p
          sx={style.excerpt}
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </Link>
    </article>
  )
}

export default Post

const style = {
  article: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '1',
    border: '2px solid',
    borderColor: 'gray.0',
    boxShadow: 'md',
    mb: 3,
    transition: '0.3s ease',
    // ':hover, :focus, :active': {},
  },
  link: {
    color: 'primary',
    padding: 4,
  },
  header: {
    my: 2,
  },
  excerpt: {
    mb: 0,
  },
}
