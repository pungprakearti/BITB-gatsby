import React, { Component } from 'react'

export default class SpiralTable extends Component {
  createTableElem(num, color, cell) {
    let rows = []
    for (let r = 0; r < num; r++) {
      let cols = []
      for (let c = 0; c < num; c++) {
        if (this.props.cell[0] === c && this.props.cell[1] === r) {
          cols.push(
            <td
              id={`AlgoSpiral-table${num}-${c}-${r}`}
              style={{ borderColor: color, backgroundColor: 'red' }}
              key={`${c}-${r}`}
            />
          )
        } else {
          cols.push(
            <td
              id={`AlgoSpiral-table${num}-${c}-${r}`}
              style={{ borderColor: color }}
              key={`${c}-${r}`}
            />
          )
        }
      }
      rows.push(<tr key={r}>{cols}</tr>)
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
    let table = this.createTableElem(
      this.props.num,
      this.props.color,
      this.props.cell
    )

    return table
  }
}
