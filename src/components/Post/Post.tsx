/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

interface propTypes {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
      description: string
    }
  }
}

const Post = ({ node }: propTypes) => {
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
    backgroundColor: 'background',
    borderRadius: '1',
    border: '2px solid',
    borderColor: 'accent',
    boxShadow: 'md',
    mb: 3,
    transition: '0.3s ease',
    ':hover, :focus': {
      boxShadow: 'sm',
      borderColor: 'primary',
      ml: -2,
      mr: 2,
    },
  },
  link: {
    color: 'primary',
    padding: 4,
    textDecoration: 'none',
  },
  header: {
    fontWeight: 'bold',
    my: 2,
  },
  excerpt: {
    color: 'text',
    mb: 0,
  },
}
