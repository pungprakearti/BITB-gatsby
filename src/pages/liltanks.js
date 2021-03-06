import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import { FaSteam, FaWindows, FaLinux, FaApple } from 'react-icons/fa'
import './liltanks.css'

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
  render() {
    return (
      <Layout>
        <div className="content-cont">
          <div className="content-center">
            <h2>I made a video game!</h2>
            <div className="content-center">
              <img
                src={this.props.data.imgLilTanksGP1.publicURL}
                alt="Lil Tanks gameplay footage1"
              />
            </div>
          </div>
          <br />
          <p>
            Lil Tanks is a throw back to old shmups like Gradius but with an
            RPG/leveling system twist. It features pixel art graphics and an
            amazing soundtrack. Lil Tanks was created using the Game Maker
            engine from Yoyo Games. All of the code was written in Game Maker's
            proprietary language (GML: Game Maker Language).
            <br />
          </p>
          <div className="content-center">
            <br />
            <a href="https://store.steampowered.com/app/495820/Lil_Tanks/">
              Check it out on SteamPowered.com
            </a>
            <br />
            <br />
          </div>
          <div className="content-center">
            <img
              src={this.props.data.imgLilTanksGP2.publicURL}
              alt="Lil Tanks gameplay footage1"
            />
          </div>
          <div className="content-center">
            <br />
            <a href="http://www.leadmoneygames.com">
              Learn more about Lead Money Games here
            </a>
            <br />
            <br />
            <div className="LilTanks-icons-cont">
              <FaSteam className="icon-steam" />
              <FaWindows className="icon-windows" />
              <FaLinux className="icon-linux" />
              <FaApple className="icon-apple" />
            </div>
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
