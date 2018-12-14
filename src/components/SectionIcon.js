import React, { Component } from 'react'
import { Link } from 'gatsby'
import './SectionIcon.css'

export default class SectionIcon extends Component {
  constructor(props) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }
  handleMouseEnter() {
    console.log('mouse enter')
    this.props.handleKittens()
  }
  render() {
    return (
      <Link to={`/${this.props.id.toLowerCase()}`}>
        <div
          className={
            this.props.fadeOut
              ? 'SectionIcon-cont fadeOut'
              : 'SectionIcon-cont fadeIn'
          }
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseEnter}
        >
          <div
            className="SectionIcon-outer-cont"
            style={{
              backgroundColor: this.props.color,
            }}
          >
            <img
              src={this.props.image}
              alt={this.props.image}
              id={`SectionIcon-img-${this.props.id}`}
            />
            <div className="SectionIcon-inner-cont" />
          </div>
        </div>
      </Link>
    )
  }
}
