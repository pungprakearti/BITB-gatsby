import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'

export const query = graphql`
  {
    imgLipslut: file(relativePath: { eq: "img_lipslut.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default class LipslutPage extends Component {
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
            <img
              src={this.props.data.imgLipslut.childImageSharp.fluid.src}
              alt="Lips"
            />
          </div>
          <p>
            At Rithm School, students intern for three weeks with professional
            companies. I worked on www.lipslut.com which is a really cool
            JAMstack built with Gatsby on React. During my time on Lipslut, I
            refactored an existing code base to fetch data from APIs such as
            Contentful and Shopify using GraphQL queries. This data was then
            used to dynamically create elements at build time. I also created
            some awesome data visualization using sales data from various
            states.
            <br />
          </p>
          <div className="content-center">
            <a
              href="https://www.lipslut.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out www.Lipslut.com
            </a>
          </div>
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
