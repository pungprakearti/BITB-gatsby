import React, { Component } from 'react'
import './AlgoLeveret.css'

/** Leveret lunch count. ***********************/

/** lunchCount: return # of carrots eaten
 *
 * params:
 * - garden: matrix of carrot counts
 *
 * returns: # of carrots
 ***********************************************/

function lunchCount(garden) {
  // Sanity checks that garden is valid

  const rowLens = garden.map(r => r.length)
  console.assert(
    Math.min(...rowLens) === Math.max(...rowLens),
    'Garden is not a matrix!'
  )
  console.assert(
    garden.every(r => r.every(c => Number.isInteger(c))),
    'Garden values must be ints!'
  )

  // Get number of rows and columns
  const nrows = garden.length
  const ncols = garden[0].length
  let path = []

  // Get the start position
  let pos = getHighMiddle(garden, nrows, ncols)

  // Eat carrots at start position
  let totalEaten = garden[pos[0]][pos[1]]
  garden[pos[0]][pos[1]] = 0

  // Get count of carrots around position
  let carrotsAround = getCloseCarrots(garden, pos)

  // While there is at least one carrot around, keep eating
  while (carrotsAround.some(dir => dir > 0)) {
    //
    // Find first highest value following WNES movement
    let nextPosIdx = carrotsAround.indexOf(Math.max(...carrotsAround))

    path.push(pos.slice(0))
    pos = moveToNewPos(nextPosIdx, pos)

    // Eat carrots
    totalEaten += garden[pos[0]][pos[1]]
    garden[pos[0]][pos[1]] = 0

    // Get next carrot count
    carrotsAround = getCloseCarrots(garden, pos)
  }

  // All out of nearby carrots. NAP TIME!

  return { totalEaten, path }
}
// end

/** Helper functions ***************************/

/** Get highest value coordinate in middle */
function getHighMiddle(garden, nrows, ncols) {
  //
  //middle row and middle column variables
  const mr = nrows / 2
  const mc = ncols / 2

  if (nrows % 2 === 1) {
    //
    // odd row and odd col
    if (ncols % 2 === 1) {
      return [Math.floor(mr), Math.floor(mc)]
    } else {
      //
      //odd row and even col
      if (garden[Math.floor(mr)][mc] > garden[Math.floor(mr)][mc - 1]) {
        return [Math.floor(mr), mc]
      } else {
        return [Math.floor(mr), mc - 1]
      }
    }
  } else {
    //
    //even row and odd col
    if (ncols % 2 === 1) {
      if (garden[mr][Math.floor(mc)] > garden[mr - 1][Math.floor(mc)]) {
        return [mr, Math.floor(mc)]
      } else {
        return [mr - 1, Math.floor(mc)]
      }
    } else {
      //
      //even row and even col
      let high = [mc, mc] //easier to use this variable because comparing between 4 counts

      if (garden[high[0]][high[1]] < garden[mc - 1][mc - 1]) {
        high = [mc - 1, mc - 1]
      } else {
        if (garden[high[0]][high[1]] < garden[mc - 1][mc]) {
          high = [mc - 1, mc]
        } else if (garden[high[0]][high[1]] < garden[mc][mc - 1]) {
          high = [mc, mc - 1]
        }
      }
      return high
    }
  }
}

/** Return all carrot values around current position in array */
function getCloseCarrots(garden, pos) {
  let resultArr = []

  //W
  if (pos[1] > 0) resultArr.push(garden[pos[0]][pos[1] - 1])
  else resultArr.push(0)

  //N
  if (pos[0] > 0) resultArr.push(garden[pos[0] - 1][pos[1]])
  else resultArr.push(0)

  //E
  if (pos[1] < garden[0].length - 1) resultArr.push(garden[pos[0]][pos[1] + 1])
  else resultArr.push(0)

  //S
  if (pos[0] < garden.length - 1) resultArr.push(garden[pos[0] + 1][pos[1]])
  else resultArr.push(0)

  return resultArr
}

/** Move to next position */
function moveToNewPos(nextPosIdx, pos) {
  //W
  if (nextPosIdx === 0) pos[1] -= 1
  //N
  if (nextPosIdx === 1) pos[0] -= 1
  //E
  if (nextPosIdx === 2) pos[1] += 1
  //S
  if (nextPosIdx === 3) pos[0] += 1
  return pos
}

/***********************************************/

export default class Leveret extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: [],
    }
    this.path = []
    this.totalEaten = 0
    this.matrix = []

    //make 10 x 8 grid
    this.rowMax = 10
    this.colMax = 8
  }

  componentDidMount() {
    this.intervalID = setInterval(this.movePos, 100)
    console.log('started interval')
    let matrix = this.createMatrix()
    let { totalEaten, path } = lunchCount(matrix)
    this.path = path
    this.totalEaten = totalEaten
    this.matrix = matrix
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
    console.log('killed interval')
  }

  movePos() {
    //moves the position to the next cell
    this.setState(st => {
      return {
        index: ++st.index % this.totalEaten,
      }
    })
  }

  createTableElem(rowMax, colMax, matrix, cell) {
    let rows = []
    for (let r = 0; r < rowMax; r++) {
      console.log('hey getting here')
      let cols = []
      for (let c = 0; c < colMax; c++) {
        console.log('hey getting here too')

        //CAN'T GET PASSED THIS AREA - ERRORS OUT HERE <----------------
        if (cell[0] === c && cell[1] === r) {
          cols.push(
            <td
              id={`AlgoLeveret-table-${c}-${r}`}
              style={{ backgroundColor: 'orangered' }}
            >
              {matrix[r][c]}
            </td>
          )
        } else {
          cols.push(<td id={`AlgoLeveret-table-${c}-${r}`}>{matrix[r][c]}</td>)
        }
      }

      rows.push(<tr>{cols}</tr>)
    }

    return (
      <div className={`AlgoLeveret-table-cont`}>
        <table className="AlgoLeveret-table">
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }

  createMatrix() {
    const max = 10
    let matrix = []

    for (let c = 0; c < this.colMax; c++) {
      let row = []
      for (let r = 0; r < this.rowMax; r++) {
        row.push(Math.floor(Math.random() * Math.floor(max)))
      }
      matrix.push(row)
    }
    return matrix
  }

  render() {
    let table = this.createTableElem(
      this.colMax,
      this.rowMax,
      this.matrix,
      this.path[this.state.pos]
    )

    return <div>{table}</div>
  }
}
