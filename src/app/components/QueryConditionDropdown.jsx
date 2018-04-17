import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const { string, func } = PropTypes

import { FIELD_TYPE_CONDITIONS } from '../helpers/queryHelpers'

export default class QueryConditionDropdown extends PureComponent {
  static propTypes = {
    fieldType: string,
    queryCondition: string,
    handleChange: func
  }

  generateOptions = () => {
    const { fieldType } = this.props
    return FIELD_TYPE_CONDITIONS[fieldType].map(fieldType => {
      const { label, value } = fieldType
      return (
        <option key={label} value={value}>
          {label}
        </option>
      )
    })
  }

  render () {
    const { queryCondition, handleChange, fieldType } = this.props

    return (
      <div className='select'>
        <select
          id='queryCondition'
          value={queryCondition}
          onChange={handleChange}
        >
          <option value='' key='select-field'>
            Select Condition
          </option>
          {fieldType !== '' && this.generateOptions()}
        </select>
      </div>
    )
  }
}
