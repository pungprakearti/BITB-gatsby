import React, { Component } from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import './jobly.css'
import BackBtn from '../components/BackBtn'

export const query = graphql`
  {
    imgJobly: file(relativePath: { eq: "img_jobly.gif" }) {
      publicURL
    }
  }
`

export default class JoblyPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
    }

    this.colors = {
      red: '#F95F62',
      orange: '#FF9052',
      yellow: '#FFD185',
      green: '#13CE66',
      blue: '#00A6FF',
      purple: '#976DD0',
      white: '#F0E3E9',
    }
  }

  render() {
    return (
      <Layout>
        <div className="content-cont" style={{ color: this.colors.white }}>
          <div className="content-center">
            <p>
              <h1>Jobly, the end-all for job search and application</h1>
            </p>
            <div className="content-center">
              <img
                src={this.props.data.imgJobly.publicURL}
                alt="Lil Tanks gameplay footage1"
              />
            </div>
          </div>
          <p>
            Jobly was a Rithm School two part sprint. Four days creating a
            backend using Express and three days to create a React front end.
            BCrypt was used on the backend for login and authentication. All of
            the styling was done from scratch and the app was deployed on
            Heroku.
            <br />
          </p>
          <div className="content-center">
            <a
              href="http://react-jobly.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out Jobly!
            </a>
          </div>
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
