import React, { PureComponent } from 'react'

import FieldDropdown from './components/FieldDropdown'
import QueryInput from './components/QueryInput'
import ResultsList from './components/ResultsList'
import QueryConditionDropdown from './components/QueryConditionDropdown'

import { search, getFields } from './helpers/fetchMethods'
export default class App extends PureComponent {
  state = {
    fields: {},
    field: '',
    fieldType: '',
    queryCondition: '',
    query: '',
    results: [],
    hits: 0,
    isLoading: true
  }

  async componentDidMount () {
    const fields = await getFields()
    if (fields) {
      this.setState({ fields, isLoading: false })
    }
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value })
  }

  handleFieldChange = ({ target: { id, value } }) => {
    const { fields } = this.state
    this.setState({ [id]: value, fieldType: fields[value].type })
  }

  handleQuery = async event => {
    this.handleChange(event)
    const { target: { value } } = event
    const { field } = this.state

    const results = await search({ field, query: value })
    if (results) {
      const { data, hits } = results
      this.setState({ results: data, hits })
    }
  }

  render () {
    const {
      field,
      query,
      queryCondition,
      results,
      hits,
      fieldType,
      fields,
      isLoading
    } = this.state
    console.log('state --> ', this.state)

    return (
      <div className='search'>
        <FieldDropdown
          field={field}
          fields={fields}
          isLoading={isLoading}
          handleChange={this.handleFieldChange}
        />
        <QueryConditionDropdown
          fieldType={fieldType}
          queryCondition={queryCondition}
          handleChange={this.handleChange}
        />
        <QueryInput query={query} handleQuery={this.handleQuery} />
        <ResultsList results={results} field={field} hits={hits} />
      </div>
    )
  }
}
