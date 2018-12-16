import React, { Component } from 'react'
import { Link } from 'gatsby'
import './NavBar.css'
import { FaHome, FaFileAlt, FaGithubSquare, FaEnvelope } from 'react-icons/fa'

export default class NavBar extends Component {
  render() {
    let navbar

    //for mobile
    try {
      if (window.innerWidth <= 415) {
        navbar = (
          <div className="NavBar-cont">
            <Link to="/">
              <FaHome className="NavBar-icon-home" />
            </Link>
            <Link to="/resume">
              <FaFileAlt className="NavBar-icon-resume" />
            </Link>
            <a href="https://github.com/pungprakearti">
              <FaGithubSquare className="NavBar-icon-github" />
            </a>
            <Link to="/contact">
              <FaEnvelope className="NavBar-icon-contact" />
            </Link>
          </div>
        )
      } else {
        //
        //desktop
        navbar = (
          <div className="NavBar-cont">
            <div className="NavBar-left">
              <div
                className="NavBar-name"
                style={{ color: this.props.colorName }}
              >
                <Link to="/">Andrew Pungprakearti</Link>
              </div>
              <div
                className="NavBar-title"
                style={{ color: this.props.colorTitle }}
              >
                Full Stack Developer
              </div>
            </div>
            <div
              className="NavBar-right"
              style={{ color: this.props.colorName }}
            >
              <div className="NavBar-right-link">
                <Link to="/resume">Resume</Link>
              </div>
              <div className="NavBar-right-link">
                <a href="https://github.com/pungprakearti">Github</a>
              </div>
              <div className="NavBar-right-link">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        )
      }
    } catch (err) {
      navbar = (
        <div className="NavBar-cont">
          <div className="NavBar-left">
            <div
              className="NavBar-name"
              style={{ color: this.props.colorName }}
            >
              <Link to="/">Andrew Pungprakearti</Link>
            </div>
            <div
              className="NavBar-title"
              style={{ color: this.props.colorTitle }}
            >
              Full Stack Developer
            </div>
          </div>
          <div className="NavBar-right" style={{ color: this.props.colorName }}>
            <div className="NavBar-right-link">
              <Link to="/resume">Resume</Link>
            </div>
            <div className="NavBar-right-link">
              <a href="https://github.com/pungprakearti">Github</a>
            </div>
            <div className="NavBar-right-link">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      )
    }

    return navbar
  }
}
