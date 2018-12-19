import React, { Component } from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
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
  render() {
    return (
      <Layout>
        <div className="content-cont">
          <div className="content-center">
            <br />
            <img
              src={this.props.data.imgAboutMe.childImageSharp.fluid.src}
              alt="Such a handsome fellow. Also, very very humble."
            />
          </div>
          <p>
            I'm a full stack developer currently attending Rithm School's eighth
            cohort. From school I've learned that I'm a huge fan of React, CSS,
            and just working on the front end in general. I love being able to
            create apps that look exactly like I envision them.
          </p>
          <p>
            Outside of web development, I enjoy making games. I'm half of Lead
            Money Games, an independent game development company. On June 15,
            2016 we were funded through Kickstarter and on April 4, 2017 we
            launched our first game on Steam called "Lil Tanks." It's a little
            shoot 'em up game that was purely engineered through trial and error
            and lots of online tutorials.
          </p>
          <div className="content-center">
            <Link to="liltanks">Lil Tanks</Link>
          </div>
          <p>
            After a few years of game development, I decided it's time for me to
            throw myself into full fledged web development. I've always loved
            the intersection of computers and art and I'm excited to see where
            this takes me.
          </p>

          <p>
            I also freelance as a digital effects artist having worked on over
            forty films. This is a vestige of my former life working in the film
            industry for over 10 years.
          </p>
          <div className="content-center">
            <a href="https://www.imdb.com/name/nm3117059">
              Check out my IMDB page
            </a>
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
          <div className="content-center">
            <a href="https://imgur.com/gallery/ZMZOU">
              DITL of an indie game developer
            </a>
            <br />
            <br />
          </div>
          <div className="content-center">
            <img
              src={this.props.data.imgFamily.childImageSharp.fluid.src}
              alt="Mi familia"
            />
          </div>
          <br />
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
