import React, { Component } from 'react'
import { Link } from 'gatsby'
import './SectionIcon.css'

export default class SectionIcon extends Component {
  render() {
    return (
      <Link to={`/${this.props.id.toLowerCase()}`}>
        <div
          className={
            this.props.fadeOut
              ? 'SectionIcon-cont fadeOut'
              : 'SectionIcon-cont fadeIn'
          }
        >
          {/* <div className="SectionIcon-cont"> */}
          <div
            className="SectionIcon-outer-cont"
            style={{
              backgroundColor: this.props.color,
            }}
          >
            {this.props.image ? (
              <img
                src={this.props.image}
                alt={this.props.image}
                id={`SectionIcon-img-${this.props.id}`}
              />
            ) : (
              ''
            )}
            <div className="SectionIcon-inner-cont" />
          </div>
        </div>
      </Link>
    )
  }
}
