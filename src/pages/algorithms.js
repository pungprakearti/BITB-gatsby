import React, { Component } from 'react'
import Layout from '../components/layout'
import BackBtn from '../components/BackBtn'
import AlgoSpiral from '../components/AlgoSpiral'
// import LeveretPage from '../components/AlgoLeveret'
// import Leveret from '../components/AlgoLeveret'

export default class AlgorithmsPage extends Component {
  render() {
    return (
      <Layout>
        <div className="content-cont">
          {/* <p>
            Here's some algorithms that I found challenging and that I thought
            would look cool visualized.
          </p> */}
          <br />
          <div className="content-center">
            <h2>Spiral</h2>
          </div>
          <p>
            This function takes one integer and creates a square grid with that
            value. Then starting from the top left corner, runs through the
            entire grid stopping in the middle.
          </p>
          <AlgoSpiral />
          {/* <br /> */}
          {/* <div className="content-center"><h2>Leveret</h2></div> */}
          {/* <Leveret /> */}
        </div>
        <BackBtn />
      </Layout>
    )
  }
}
