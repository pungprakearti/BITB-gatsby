import React, { Component } from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import './aboutme.css'
import BackBtn from '../components/BackBtn'

export const query = graphql`
  {
    imgAboutMe: file(relativePath: { eq: "img_aboutme.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    imgFamily: file(relativePath: { eq: "img_family.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

export default class AboutMePage extends Component {
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
        <div className="AboutMe-cont" style={{ color: this.colors.white }}>
          <p>
            I'm half of Lead Money Games, an independent game development
            company. On June 15, 2016 we were funded through Kickstarter and on
            April 4, 2017 we launched our first game on Steam called "Lil
            Tanks." It's a little shoot 'em up game that was purely engineered
            through trial and error and lots of online tutorials.
          </p>
          <div className="AboutMe-center">
            <Link to="liltanks">Lil Tanks</Link>
          </div>
          <p>
            After a few years of game development, I decided it's time for me to
            throw myself into full fledged software engineering. I've always
            loved the intersection of computers and art and I'm excited to see
            where this takes me.
          </p>

          <p>
            I also freelance as a digital effects artist having worked on over
            forty films. This is a vestige of my former life working in the film
            industry for 10 years.
          </p>
          <div className="AboutMe-center">
            <a href="http://www.imdb.com">Check out my IMDB page</a>
          </div>

          <p>
            In my free time, you can usually find me on a hockey rink. I play
            ice and roller hockey all over the Bay Area and Sonoma County. If I
            can continue to pay league fees, I am happy.
          </p>

          <p>
            My family life consists of my amazing wife Samantha, and my two
            adorable children: Theo and Violet.
            <br />
          </p>
          <div className="AboutMe-center">
            <a href="https://imgur.com/gallery/ZMZOU">
              DITL of an indie game developer
            </a>
          </div>
          <div className="AboutMe-center">
            <img
              src={this.props.data.imgFamily.childImageSharp.fluid.src}
              alt="Mi familia"
            />
          </div>
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
