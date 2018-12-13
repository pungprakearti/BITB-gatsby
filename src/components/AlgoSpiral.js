import React, { Component } from 'react'
import './AlgoSpiral.css'
import SpiralTable from './SpiralTable'

/************************************************
 * spiral takes an integer as a parameter and console.logs
 * the traveled path of a spiral through a matrix of (x, y)
 * positions. The integer represents the length of the first
 * path before turning
 ***********************************************/

function spiral(spaces) {
  let dir = 0 //direction to move
  let pos = [-1, 0] //current position: (-1, 0) is starting off the board
  let log = '' //string log for testing <-------------- FIX HERE

  //first straight path
  for (let i = 0; i < spaces; i++) {
    move(dir, pos)
    log += printAndLog(pos)
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
        log += printAndLog(pos)
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

function printAndLog(pos) {
  console.log(`(${pos[0]}, ${pos[1]})`)
  // return `(${pos[0]}, ${pos[1]})\n`
  return [pos[0], pos[1]]
}

/************************************************/

export default class AlgoSpiral extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

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

  createTableElem(num, color) {
    let rows = []
    for (let r = 0; r < num; r++) {
      let cols = []
      for (let c = 0; c < num; c++) {
        cols.push(
          <td
            id={`AlgoSpiral-table${num}-${c}-${r}`}
            style={{ borderColor: color }}
          />
        )
      }
      rows.push(<tr>{cols}</tr>)
    }

    return (
      <div className={`AlgoSpiral-table${num}-cont`}>
        <table
          className={`AlgoSpiral-table AlgoSpiral-table${num}`}
          style={{ borderColor: color }}
        >
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }

  render() {
    let log2 = spiral(2)
    console.log(log2)
    // let interval = setInterval()
    return (
      <div className="AlgoSpiral-cont">
        <SpiralTable num={2} color={this.colors.red} cell={[0, 0]} />
        {this.createTableElem(2, this.colors.red)}
        {this.createTableElem(3, this.colors.orange)}
        {this.createTableElem(4, this.colors.yellow)}
        {this.createTableElem(5, this.colors.green)}
        {this.createTableElem(6, this.colors.blue)}
        {this.createTableElem(7, this.colors.purple)}
        {this.createTableElem(8, this.colors.white)}
        {this.createTableElem(9, this.colors.red)}
        {this.createTableElem(10, this.colors.orange)}
      </div>
    )
  }
}
