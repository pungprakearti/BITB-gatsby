import React, { Component } from 'react'
import { Link } from 'gatsby'
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
            A place to show off algorithms with visualization.
            <br />
          </p>
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
