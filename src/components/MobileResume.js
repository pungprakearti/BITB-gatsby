import React, { Component } from 'react'
import './MobileResume.css'

export default class MobileResume extends Component {
  render() {
    return (
      <div className="MobileResume-cont">
        <div className="MobileResume-exp-cont">
          <h3>Experience</h3>
          <div className="MobileResume-faneron">
            <h4>Front End Web Development Intern</h4>
            Faneron Inc. - <a href="http://www.lipslut.com">www.lipslut.com</a>
            <br />
            November 2018 - present
            <br />
            <ul>
              <li>Refactored an existing production JAMstack code base.</li>
              <li>
                Fetched data from APIs, such as Contentful using GraphQL
                queries.
              </li>
              <li>
                Used Gatsby and React Portals to create reusable components.
              </li>
              <li>Created dynamic visualizations from user data.</li>
              <li>
                Used React to create styled components that matched design
                mockups.
              </li>
            </ul>
          </div>
        </div>
        <div className="MobileResume-nimble">
          <h4>Digital Effects Artist</h4>
          Nimble Collective
          <br />
          October 2016 - August 2017
          <br />
          <ul>
            <li>
              Used compositing techniques to fix rendering issues and added
              effects to compliment story telling.
            </li>
            <li>Worked remotely using proprietary cloud based platform.</li>
          </ul>
        </div>
        <div className="MobileResume-pdi">
          <h4>Stereoscopic Image Finaling Lead / Surfacing Artist</h4>
          DreamWorks Animation
          <br />
          July 2008 - February 2015
          <br />
          <ul>
            <li>Worked on over 30 motion pictures.</li>
            <li>
              Used compositing techniques, 3D projection, digital paint, and
              articulated rotoscope to fix rendering errors and add polish to
              shots.
            </li>
            <li>
              Fixed stereoscopic issues that caused distracting and nauseating
              effects when viewed.
            </li>
            <li>Textured 3D assets and rendered using proprietary renderer.</li>
            <li>
              Created, documented, and maintained several Python scripts and
              Linux tutorials on DreamWorks' internal website.
            </li>
          </ul>
        </div>
        <div className="MobileResume-skills-cont">
          <h3>Skills</h3>
          <div className="MobileResume-skills-cols">
            <div className="MobileResume-skills-left">
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
                <br />
                <div className="MobileResume-css">CSS</div>
                SASS
              </p>
              <p />
            </div>
            <div className="MobileResume-skills-right">
              <p>
                Python
                <br />
                Flask
                <br />
                SQLAlchemy
                <br />
                Express
                <br />
                PostgreSQL
                <br />
                GraphQL
                <br />
                Git
              </p>
            </div>
          </div>
        </div>
        <div className="MobileResume-edu-cont">
          <h3>Education</h3>
          <h4>Rithm School</h4>
          Full Stack Web Development
          <br />
          2018 - 2019
          <ul>
            <li>
              In person 17 week accelerated front end and back end web
              development course.
            </li>
            <li>Created over 30 web applications in several frameworks.</li>
          </ul>
          <div className="MobileResume-aau">
            <h4>Academy of Art University</h4>
            Bachelor of Arts in Visual Effects
            <br />
            2002 - 2007
            <ul>
              <li>
                Curriculum included compositing, matte painting, particles, MEL
                scripting, editing, match moving, modeling, and animation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
