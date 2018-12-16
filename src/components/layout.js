import React, { Component } from 'react'
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

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: 0,
    }
  }

  componentDidMount() {
    this.setState({ windowWidth: window.innerWidth })
  }

  render() {
    return this.state.windowWidth
  }
}

/*
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
        <div className="Layout-cont">
          <div className="Layout-child-cont">{children}</div>
          <div className="Layout-bg-cont">
            <div className="Layout-bg1" />
            <div className="Layout-bg2" />
            <div className="Layout-bg3" />
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
*/
