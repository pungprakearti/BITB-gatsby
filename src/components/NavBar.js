import React, { Component } from 'react'
import { Link } from 'gatsby'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar-cont">
        <div className="NavBar-left">
          <div className="NavBar-name" style={{ color: this.props.colorName }}>
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
}
