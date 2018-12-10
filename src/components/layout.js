import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import NavBar from './NavBar'
import './layout.css'

const colors = {
  red: '#F95F62',
  orange: '#FF9052',
  yellow: '#FFD185',
  green: '#13CE66',
  blue: '#00A6FF',
  purple: '#976DD0',
  white: '#F0E3E9',
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Andrew Pungprakearti - Full Stack Developer',
            },
            {
              name: 'keywords',
              content:
                'JavaScript, React, Redux, Gatsby, JQuery, Python, Flask, SQLAlchemy, Express, Node.js, PostgreSQL, GraphQL, Git, CSS, SASS',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <NavBar colorName={colors.white} colorTitle={colors.blue} />
        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
