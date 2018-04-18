import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FieldDropdown from '../components/FieldDropdown'
import QueryConditionDropdown from '../components/QueryConditionDropdown'
import QueryInput from '../components/QueryInput'

const { object, bool, func, number } = PropTypes

export default class QueryForm extends Component {
  static propTypes = {
    fields: object,
    isLoading: bool,
    handleQueryFormChange: func,
    index: number
  }

  handleChange = ({ target: { id, value } }) => {
    const { handleQueryFormChange, index } = this.props
    handleQueryFormChange(index, { [id]: value })
  }

  handleFieldChange = ({ target: { id, value } }) => {
    const { fields, handleQueryFormChange, index } = this.props
    handleQueryFormChange(index, { [id]: value, fieldType: fields[value].type })
  }

  render () {
    const {
      fields,
      isLoading,
      field,
      queryCondition,
      query1,
      fieldType
    } = this.props

    return (
      <div className='query-form'>
        <FieldDropdown
          field={field || ''}
          fields={fields}
          isLoading={isLoading}
          handleChange={this.handleFieldChange}
        />
        <QueryConditionDropdown
          fieldType={fieldType || ''}
          queryCondition={queryCondition || ''}
          handleChange={this.handleChange}
        />
        <QueryInput
          id='query1'
          value={query1 || ''}
          handleQuery={this.handleChange}
        />
      </div>
    )
  }
}
