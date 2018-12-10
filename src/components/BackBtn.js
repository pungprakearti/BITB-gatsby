import React, { Component } from 'react'
import './BackBtn.css'
import { Link } from 'gatsby'

export default class BackBtn extends Component {
  render() {
    return (
      <Link to="/">
        <div className="BackBtn-grid">
          <div className="BackBtn-diamond BackBtn1" />
          <div className="BackBtn-diamond BackBtn2" />
          <div className="BackBtn-diamond BackBtn3" />
          <div className="BackBtn-diamond BackBtn4" />
          <div className="BackBtn-diamond BackBtn5" />
          <div className="BackBtn-diamond BackBtn6" />
          <div className="BackBtn-diamond BackBtn7" />
        </div>
      </Link>
    )
  }
}
