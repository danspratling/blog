/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Layout, Hero, Container, Row, Col, Post } from '../components'

const BlogList = ({ data }) => {
  return (
    <Layout
    // location={this.props.location}
    // title={data.site.siteMetadata.title}
    >
      {/* <SEO title="All posts" /> */}
      <Hero></Hero>

      {/**
        TODO: add page transitions for when a user opens a blog post. Should almost feel like a modal.
        */}
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
