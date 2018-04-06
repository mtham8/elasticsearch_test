import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const { string, func } = PropTypes

export default class QueryInput extends PureComponent {
  static propType = {
    query: string,
    handleQuery: func
  }

  render () {
    const { query, handleQuery } = this.props

    return (
      <div className='input'>
        <input id='query' value={query} onChange={handleQuery} />
      </div>
    )
  }
}
