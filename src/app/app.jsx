import React, { PureComponent } from 'react'

import FieldDropdown from './components/FieldDropdown'
import QueryInput from './components/QueryInput'
import ResultsList from './components/ResultsList'

import { search } from './helpers/fetchMethods'
export default class App extends PureComponent {
  state = {
    field: 'username',
    query: '',
    results: [],
    hits: 0
  }

  handleChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value })
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
    const { field, query, results, hits } = this.state

    return (
      <div className='search'>
        <FieldDropdown field={field} handleChange={this.handleChange} />
        <QueryInput query={query} handleQuery={this.handleQuery} />
        <ResultsList results={results} field={field} hits={hits} />
      </div>
    )
  }
}
