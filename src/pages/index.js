import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Hero, PostList } from '../components'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout
        location={this.props.location}
        title={data.site.siteMetadata.title}
      >
        {/* <SEO title="All posts" /> */}
        <Hero>Just another dev blog</Hero>
        {/**
        TODO: add page transitions for when a user opens a blog post. Should almost feel like a modal.
        */}
        <PostList posts={data.allMarkdownRemark.edges} />
      </Layout>
    )
  }
}

export default BlogIndex

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
