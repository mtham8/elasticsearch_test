import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { getFields } from '../helpers/fetchMethods'

const { string, func } = PropTypes

export default class FieldDropdown extends PureComponent {
  static propTypes = {
    field: string,
    handleChange: func
  }

  state = {
    fields: [],
    isLoading: true
  }

  async componentWillMount () {
    const fields = await getFields()
    if (fields) {
      this.setState({ fields, isLoading: false })
    }
  }

  generateOptions = () => {
    const { fields } = this.state
    return fields.map(field => (
      <option key={field} value={field}>
        {field}
      </option>
    ))
  }

  render () {
    const { field, handleChange } = this.props
    const { isLoading, fields } = this.state

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
