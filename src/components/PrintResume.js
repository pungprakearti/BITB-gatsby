import React, { Component } from 'react'
import './PrintResume.css'

export default class PrintResume extends Component {
  render() {
    return (
      <div className="PrintResume-cont">
        <div className="PrintResume-top" />
        <div className="PrintResume-header">
          <div className="PrintResume-name">
            Andrew
            <br />
            Pungprakearti
          </div>
          <div className="PrintResume-title">Full Stack Developer</div>
        </div>
        <div className="PrintResume-body-cont">
          <div className="PrintResume-right">
            <h3>Experience</h3>
            <div className="PrintResume-aleph jobs">
              <h4>Web Developer</h4>
              Aleph Inc.
              <br />
              February 2019 - Present
              <br />
              <ul className="PrintResume-list">
                <li>
                  Worked with non-profit organizations to create modern and
                  responsive websites using React, Preact, and HTML markup
                  with advanced SASS and CSS styling techniques.
                </li>
                <li>Implemented testing using Cypress.io for end to end testing.</li>
                <li>Fixed issues with accessibility.</li>
              </ul>
            </div>
            <div className="PrintResume-faneron jobs">
              <h4>Front End Web Development Intern</h4>
              Faneron Inc.
              <br />
              November 2018 - December 2018
              <br />
              <ul className="PrintResume-list">
                <li>Refactored an existing production JAMstack code base.</li>
                <li>
                  Fetched data from APIs, such as Contentful using GraphQL
                  queries.
                </li>
                <li>
                  Used Gatsby and React Portals to create reusable components.
                </li>
                <li>Created dynamic visualizations from user data.</li>
              </ul>
            </div>
            <div className="PrintResume-nimble jobs">
              <h4>Digital Effects Artist</h4>
              Nimble Collective
              <br />
              October 2016 - August 2017
              <br />
              <ul className="PrintResume-list">
                <li>
                  Used compositing techniques to fix rendering issues and added
                  effects to compliment story telling.
                </li>
              </ul>
            </div>
            <div className="PrintResume-pdi jobs">
              <h4>Stereoscopic Image Finaling Lead / Surfacing Artist</h4>
              DreamWorks Animation
              <br />
              July 2008 - February 2015
              <br />
              <ul className="PrintResume-list">
                <li>Worked on over 30 motion pictures.</li>
                <li>
                  Used compositing techniques, 3D projection, digital paint, and
                  articulated rotoscope to fix rendering errors and add polish
                  to shots.
                </li>
                <li>
                  Created, documented, and maintained several Python scripts and Linux tutorials.
                </li>
              </ul>
            </div>
          </div>
          <div className="PrintResume-middle" />
          <div className="PrintResume-left">
            <h3 id="PrintResume-h-contact">Contact</h3>
            <div className="PrintResume-contact">
              <a href="mailto:andrew.pungprakearti@gmail.com">
                andrew.pungprakearti@gmail.com
              </a>
              <br />
              (415) 868-5025
              <br />
              Rohnert Park, California
              <br />
              <br />
              <div className="PrintResume-bitb">
                <a href="http://www.biscuitsinthebasket.com">
                  www.biscuitsinthebasket.com
                </a>
              </div>
              <br />
              <div className="PrintResume-github">
                <a href="https://github.com/pungprakearti">
                  www.github.com/pungprakearti
                </a>
              </div>
            </div>
            <h3>Skills</h3>
            <div className="PrintResume-skills-cont">
              <div className="PrintResume-skills-left">
                <p>
                  JavaScript
                  <br />
                  React
                  <br />
                  Redux
                  <br />
                  Gatsby
                  <br />
                  JQuery
                </p>
              </div>
              <div className="PrintResume-skills-middle">
                <p>
                  Python
                  <br />
                  Flask
                  <br />
                  SQLAlchemy
                  <br />
                  PostgreSQL
                  <br />
                  GraphQL
                </p>
              </div>
              <div className="PrintResume-skills-right">
                <p>
                  Express
                  <br />
                  Node.js
                  <br />
                  Git
                  <br />
                  CSS
                  <br />
                  SASS
                </p>
              </div>
            </div>
            <h3>Education</h3>
            <h4>Rithm School</h4>
            Full Stack Web Development
            <br />
            2018 - 2019
            <ul>
              <li>
                In person 17 week accelerated frontend and backend web
                development course.
              </li>
              <li>Created over 30 web applications in several frameworks.</li>
            </ul>
            <div className="PrintResume-aau">
              <h4>Academy of Art University</h4>
              Bachelor of Arts in Visual Effects
              <br />
              2002 - 2007
              <ul>
                <li>
                  Curriculum included compositing, matte painting, particles,
                  MEL scripting, editing, match moving, modeling, and animation.
                </li>
              </ul>
            </div>
            <h3 id="PrintResume-h-misc">Miscellaneous</h3>
            <div className="PrintResume-misc-cont">
              Mentor with <a href="https://wearementorme.org/">Mentor Me</a> of Petaluma
              <br />
              2017 - Present
              <br />
              <div className="PrintResume-USMC">
                United States Marine Corps Veteran
                <br />
                2000 - 2008
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
