import React, { Component } from 'react'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

import './contact.css'

export default class ConnectPage extends Component {
  render() {
    return (
      <Layout>
        <div className="Contact-cont">
          <div className="content-cont">
            <div className="content-center">
              <h2>Contact Me</h2>
              <a href="mailto:andrew.pungprakearti@gmail.com">
                andrew.pungprakearti@gmail.com
              </a>
              <br />
              <br />
              <h2>Connect With Me</h2>
              <div className="Contact-icons-cont">
                <a href="https://www.facebook.com/andrew.pungprakearti">
                  <FaFacebookSquare className="icon-facebook" />
                </a>
                <a href="https://www.linkedin.com/in/andrewpungprakearti">
                  <FaLinkedin className="icon-linkedin" />
                </a>
                <a href="https://www.instagram.com/trauma68">
                  <FaInstagram className="icon-instagram" />
                </a>
                <a href="https://twitter.com/ABPungprakearti">
                  <FaTwitterSquare className="icon-twitter" />
                </a>
              </div>
              <div className="Contact-tweet">
                <TwitterTweetEmbed tweetId={'1058537258129584130'} />
              </div>
            </div>
          </div>
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
