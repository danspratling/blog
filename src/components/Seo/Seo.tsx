import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import socialImage from '../../../static/social-media-image.jpg'

interface propTypes {
  title: string
  description?: string
  meta?: []
}

const SEO = ({ title, description, meta }: propTypes) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title || site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`} //%s is just title above. Other stings can be added here too like {`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content:
            typeof window !== 'undefined' ? window.location.hostname : '',
        },
        {
          property: `og:image`,
          content: socialImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: socialImage,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
}

export default SEO
