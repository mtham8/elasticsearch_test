import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const { string, func } = PropTypes

export default class QueryInput extends PureComponent {
  static propType = {
    value: string,
    id: string,
    handleQuery: func
  }

  render () {
    const { value, handleQuery, id } = this.props

    return (
      <div className='input'>
        <input id={id} value={value} onChange={handleQuery} />
      </div>
    )
  }
}
