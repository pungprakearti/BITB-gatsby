import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import './lipslut.css'

export const query = graphql`
  {
    imgLSDV: file(relativePath: { eq: "img_lsdv.gif" }) {
      publicURL
    }
    imgLSIng: file(relativePath: { eq: "img_lsing.gif" }) {
      publicURL
    }
  }
`

export default class LipslutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="content-cont">
          <div className="content-center">
            <br />
            <img
              src={this.props.data.imgLSDV.publicURL}
              alt="An animated gif of the US with states colored based off of sales"
              id="Lipslut-dv"
            />
          </div>
          <p>
            At Rithm School, students intern for three weeks with professional
            companies. I worked with Faneron Inc. on a lipstick brand. The
            website is a really cool JAMstack built with Gatsby on React. During
            my time on that project, I refactored an existing code base to fetch
            data from APIs such as Contentful and Shopify using GraphQL queries.
            This data was then used to dynamically create elements at build
            time. I also created some awesome data visualization using sales
            data from various states.
            <br />
          </p>
          <div className="content-center">
            <br />
            <img
              src={this.props.data.imgLSIng.publicURL}
              alt="An animated gif of an ingredients list pop up modal"
              id="Lipslut-ing"
            />
          </div>
          <br />
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
