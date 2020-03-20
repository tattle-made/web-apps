/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SocialImage from '../images/social-card.jpg'

function SEO({ description, lang, meta, title }) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: {name: {eq: "social-card"}}) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        },
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
  const socialImageURL = allFile.edges[0].node.publicURL;


  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
    >
      <meta property="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={socialImageURL} />
      <meta property="og:type" content={'website'} />
      <meta property="twitter:card" content={'summary'} />
      <meta property="twitter:creator" content={site.siteMetadata.author} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
