/**
 * Social media component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const Socials = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { social } = data.site.siteMetadata

  return (
    <>
      <a href={`https://twitter.com/${social.twitter}`}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href={`https://github.com/${social.github}`}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </>
  )
}

export default Socials
