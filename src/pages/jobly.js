import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'

export const query = graphql`
  {
    imgJobly: file(relativePath: { eq: "img_jobly.gif" }) {
      publicURL
    }
  }
`

export default class JoblyPage extends Component {
  render() {
    return (
      <Layout>
        <div className="content-cont">
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
          <br />
          <p>
            Jobly was a Rithm School two part sprint. Four days creating a
            backend using Express and three days to create a React front end.
            BCrypt was used on the backend for login and authentication. All of
            the styling was done from scratch and the app was deployed on
            Heroku.
            <br />
          </p>
          <div className="content-center">
            <a href="http://react-jobly.herokuapp.com/">Check out Jobly!</a>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
