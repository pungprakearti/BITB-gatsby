import React, { Component } from 'react'
import './AlgoSpiral.css'
import SpiralTable from './SpiralTable'

/************************************************
 * spiral takes an integer as a parameter and logs the
 * traveled path of a spiral through a matrix of (x, y)
 * positions. The integer represents the length of the
 * first path before turning
 ***********************************************/

function spiral(spaces) {
  let dir = 0 //direction to move
  let pos = [-1, 0] //current position: (-1, 0) is starting off the board
  let log = []

  //first straight path
  for (let i = 0; i < spaces; i++) {
    move(dir, pos)
    log.push(logPos(pos))
  }
  //change direction - if dir is 4, restart at 0
  dir = ++dir % 4
  spaces--

  //loop until you can't move anymore spaces
  while (spaces > 0) {
    //
    //loop twice, then reduce number of spaces to move by 1
    for (let j = 0; j < 2; j++) {
      //
      //move number of spaces and log each time
      for (let k = 0; k < spaces; k++) {
        move(dir, pos)
        log.push(logPos(pos))
      }
      //change direction
      dir = ++dir % 4
    }
    spaces--
  }
  //this return is just to help testing with jest
  return log
}

/** helper functions */

function move(dir, pos) {
  //right
  if (dir === 0) pos[0]++
  //down
  if (dir === 1) pos[1]++
  //left
  if (dir === 2) pos[0]--
  //up
  if (dir === 3) pos[1]--
}

function logPos(pos) {
  return [pos[0], pos[1]]
}

/************************************************/

export default class AlgoSpiral extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: [0, 0, 0, 0, 0, 0],
    }
    this.movePos = this.movePos.bind(this)

    this.colors = {
      red: '#F95F62',
      orange: '#FF9052',
      yellow: '#FFD185',
      green: '#13CE66',
      blue: '#00A6FF',
      purple: '#976DD0',
      white: '#F0E3E9',
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(this.movePos, 100)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  movePos() {
    //moves the position to the next cell
    this.setState(st => {
      return {
        show: [
          ++st.show[0] % 4,
          ++st.show[1] % 9,
          ++st.show[2] % 16,
          ++st.show[3] % 25,
          ++st.show[4] % 36,
          ++st.show[5] % 100,
        ],
      }
    })
  }

  render() {
    //get logs of spiral movement
    let log2 = spiral(2)
    let log3 = spiral(3)
    let log4 = spiral(4)
    let log5 = spiral(5)
    let log6 = spiral(6)
    let log10 = spiral(10)

    return (
      <div className="AlgoSpiral-cont">
        <SpiralTable
          num={2}
          color={this.colors.red}
          cell={log2[this.state.show[0]]}
        />
        <SpiralTable
          num={3}
          color={this.colors.orange}
          cell={log3[this.state.show[1]]}
        />
        <SpiralTable
          num={4}
          color={this.colors.yellow}
          cell={log4[this.state.show[2]]}
        />
        <SpiralTable
          num={5}
          color={this.colors.green}
          cell={log5[this.state.show[3]]}
        />
        <SpiralTable
          num={6}
          color={this.colors.blue}
          cell={log6[this.state.show[4]]}
        />
        <SpiralTable
          num={10}
          color={this.colors.white}
          cell={log10[this.state.show[5]]}
        />
      </div>
    )
  }
}
