import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import PrintResume from '../components/PrintResume'
import NavBar from '../components/NavBar'

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
      <React.Fragment>
        <NavBar />
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
        </div>
      </React.Fragment>
    )
  }
}
