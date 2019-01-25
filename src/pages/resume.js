import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import PrintResume from '../components/PrintResume'
import './resume.css'

export const query = graphql`
  {
    pdfResume: file(
      relativePath: { eq: "andrew_pungprakearti_resume_2018.pdf" }
    ) {
      publicURL
    }
  }
`

export default class ResumePage extends Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <div className="Resume-desktop">
            <br />
            <PrintResume />
            <BackBtn />
            <div className="content-center">
              <br />
              <a
                href={this.props.data.pdfResume.publicURL}
                download="andrew_pungprakearti_resume_2018.pdf"
              >
                Download Printable PDF Resume
              </a>
              <br />
              <br />
            </div>
          </div>
        </React.Fragment>
      </Layout>
    )
  }
}
