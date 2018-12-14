import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SectionIcon from '../components/SectionIcon'
import './index.css'

export const query = graphql`
  {
    imgAboutMe: file(relativePath: { eq: "img_aboutme.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    imgLilTanks: file(relativePath: { eq: "img_liltanks.gif" }) {
      publicURL
    }
    imgLipslut: file(relativePath: { eq: "img_lipslut.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    imgJobly: file(relativePath: { eq: "img_jobly.gif" }) {
      publicURL
    }
    imgResume: file(relativePath: { eq: "img_resume.gif" }) {
      publicURL
    }
    imgContact: file(relativePath: { eq: "img_contact.gif" }) {
      publicURL
    }
    imgAlgorithms: file(relativePath: { eq: "img_algorithms.gif" }) {
      publicURL
    }
    imgKitten1: file(relativePath: { eq: "img_kitten1.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    imgKitten2: file(relativePath: { eq: "img_kitten2.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: true,
      kittens: false,
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

    this.sections = [
      {
        id: 'aboutMe',
        color: this.colors.orange,
        image: this.props.data.imgAboutMe.childImageSharp.fluid.src,
      },
      {
        id: 'lilTanks',
        color: this.colors.red,
        image: this.props.data.imgLilTanks.publicURL,
      },
      {
        id: 'jobly',
        color: this.colors.yellow,
        image: this.props.data.imgJobly.publicURL,
      },
      {
        id: 'lipslut',
        color: this.colors.blue,
        image: this.props.data.imgLipslut.childImageSharp.fluid.src,
      },
      {
        id: 'algorithms',
        color: this.colors.purple,
        image: this.props.data.imgAlgorithms.publicURL,
      },
      {
        id: 'resume',
        color: this.colors.green,
        image: this.props.data.imgResume.publicURL,
      },
      {
        id: 'contact',
        colors: this.colors.white,
        image: this.props.data.imgContact.publicURL,
      },
    ]

    this.handleKittens = this.handleKittens.bind(this)
  }

  handleKittens() {
    this.state.kittens
      ? this.setState({
          kittens: false,
        })
      : this.setState({
          kittens: true,
        })
  }

  render() {
    return (
      <Layout>
        <div className="Index-cont">
          <div className="Index-grid">
            {this.sections.map(section => {
              if (section.id === 'contact') {
                return (
                  <div id={section.id} key={section.id}>
                    <SectionIcon
                      color={section.color}
                      image={section.image}
                      id={section.id}
                      handleKittens={this.handleKittens}
                    />
                  </div>
                )
              } else {
                return (
                  <div id={section.id} key={section.id}>
                    <SectionIcon
                      color={section.color}
                      image={section.image}
                      id={section.id}
                    />
                  </div>
                )
              }
            })}
          </div>
          {this.state.kittens ? (
            <React.Fragment>
              <div className="Index-kitten1">
                <img
                  src={this.props.data.imgKitten1.childImageSharp.fluid.src}
                  alt="yellow kitten raising the roof"
                  id="index-kitten1"
                />
              </div>
              <div className="Index-kitten2">
                <img
                  src={this.props.data.imgKitten2.childImageSharp.fluid.src}
                  alt="black cat chillin"
                  id="index-kitten2"
                />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="Index-kitten1 Index-kitten-right">
                <img
                  src={this.props.data.imgKitten1.childImageSharp.fluid.src}
                  alt="yellow kitten raising the roof"
                  id="index-kitten1"
                />
              </div>
              <div className="Index-kitten2 Index-kitten-left">
                <img
                  src={this.props.data.imgKitten2.childImageSharp.fluid.src}
                  alt="black cat chillin"
                  id="index-kitten2"
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </Layout>
    )
  }
}
