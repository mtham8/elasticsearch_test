import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const { string, func, object } = PropTypes

export default class FieldDropdown extends PureComponent {
  static propTypes = {
    field: string,
    handleChange: func,
    fields: object
  }

  generateOptions = () => {
    const { fields } = this.props
    return Object.keys(fields).map(field => (
      <option key={field} value={field}>
        {field}
      </option>
    ))
  }

  render () {
    const { field, handleChange, isLoading } = this.props

    return (
      <div>
        <select id='field' value={field} onChange={handleChange}>
          <option value='' key='select-field'>
            Select Field
          </option>
          {!isLoading && this.generateOptions()}
        </select>
      </div>
    )
  }
}
