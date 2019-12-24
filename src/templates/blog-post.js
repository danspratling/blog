/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql } from 'gatsby'
import { Layout, Container, Row, Col, SEO } from '../components'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <div
        sx={{
          ...style.background,
          backgroundImage: theme =>
            `linear-gradient(to bottom left, ${theme.colors.pink} 0%, ${theme.colors.yellow} 100%)`,
        }}
      />
      <Container>
        <Row sx={{ justifyContent: 'center' }}>
          <Col xs={12} lg={10} sx={style.wrapper}>
            <header sx={{ marginBottom: 5 }}>
              <h1 sx={style.title}>{post.frontmatter.title}</h1>
              <p sx={style.date}>{post.frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      {/* <article></article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}
// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = this.props.data.markdownRemark
//     const siteTitle = this.props.data.site.siteMetadata.title
//     // const { previous, next } = this.props.pageContext
//   }
// }

export default BlogPost

const style = {
  background: {
    position: 'absolute',
    width: '100%',
    zIndex: -1,
    height: '68vh',
    maxHeight: '800px',
    minHeight: '520px',
    backgroundColor: 'primary',
  },
  wrapper: {
    px: [4, , 5, 6],
    py: [4, , , 5],
    backgroundColor: 'background',
    marginTop: 6,
    borderRadius: 1,
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 'bold',
    color: 'primary',
    textAlign: 'center',
    mb: 1,
  },
  date: {
    fontSize: 2,
    textAlign: 'center',
  },
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
