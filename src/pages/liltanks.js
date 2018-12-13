import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import { FaSteam, FaWindows, FaLinux, FaApple } from 'react-icons/fa'

export const query = graphql`
  {
    imgLilTanksGP1: file(relativePath: { eq: "img_lt1.gif" }) {
      publicURL
    }
    imgLilTanksGP2: file(relativePath: { eq: "img_lt2.gif" }) {
      publicURL
    }
  }
`

export default class LilTanksPage extends Component {
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
              <h2>I made a video game!</h2>
            </p>
            <div className="content-center">
              <img
                src={this.props.data.imgLilTanksGP1.publicURL}
                alt="Lil Tanks gameplay footage1"
              />
            </div>
          </div>
          <p>
            Lil Tanks is a throw back to old shmups like Gradius but with an
            RPG/leveling system twist. It features pixel art graphics and an
            amazing soundtrack. Lil Tanks was created using the Game Maker
            engine from Yoyo Games. All of the code was written in Game Maker's
            proprietary language (GML: Game Maker Language).
            <br />
          </p>
          <div className="content-center">
            <a
              href="https://store.steampowered.com/app/495820/Lil_Tanks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it out on SteamPowered.com
            </a>
          </div>
          <div className="content-center">
            <img
              src={this.props.data.imgLilTanksGP2.publicURL}
              alt="Lil Tanks gameplay footage1"
            />
          </div>
          <div className="content-center">
            <a
              href="http://www.leadmoneygames.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Lead Money Games here
            </a>
            <br />
            <br />
            <div className="LilTanks-icons-cont">
              <FaSteam className="icon-steam" />{' '}
              <FaWindows className="icon-windows" />{' '}
              <FaLinux className="icon-linux" />{' '}
              <FaApple className="icon-apple" />
            </div>
          </div>
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
