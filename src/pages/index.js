/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Layout, Hero, Post, SEO } from '../components'
import { Container, Row, Col } from '../components/Grid'

const BlogList = ({ data }) => {
  return (
    <Layout>
      <SEO title="A Frontend Developer blog by Dan Spratling" />
      <Hero />

      <Container>
        <Row sx={style.postList.row}>
          {data.allMarkdownRemark.edges.map(({ node }, index) => (
            <Col key={index} lg={9}>
              <Post node={node} />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogList

const style = {
  postList: {
    row: {
      position: 'relative',
      marginTop: '-100px',
      mx: 'auto',
      justifyContent: 'center',
    },
  },
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
