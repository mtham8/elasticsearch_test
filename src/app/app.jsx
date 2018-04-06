import React, { Component } from 'react'

import { getColumns } from './fetchMethods'
export default class App extends Component {
  state = {
    column: ''
  }

  selectColumn = ({ id, value }) => {
    this.setState({ [id]: value })
  }

  render () {
    const { column } = this.state

    return (
      <div>
        <ColumnDropdown value={column} selectColumn={this.selectColumn} />
      </div>
    )
  }
}

class ColumnDropdown extends Component {
  state = {
    columns: [],
    isLoading: false
  }

  componentWillMount () {
    const columns = getColumns()
    this.setState({ isLoading: true })
    if (columns) {
      this.setState({ columns, isLoading: false })
    }
  }

  generateOptions = () => {
    const { columns } = this.state
    return columns.map(column => (
      <option key={column} value={column}>
        {column}
      </option>
    ))
  }

  render () {
    const { value, selectColumn } = this.props
    const { isLoading, columns } = this.state

    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {columns.length > 0 && (
          <select id='column' value={value} onChange={selectColumn}>
            {this.generateOptions()}
          </select>
        )}
      </div>
    )
  }
}
