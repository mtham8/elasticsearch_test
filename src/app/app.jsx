import React, { PureComponent } from 'react'

import ResultsList from './components/ResultsList'
import QueryForm from './components/QueryForm'

import { search, getFields } from './helpers/fetchMethods'
import { buildQuery } from './helpers/queryHelpers'
export default class App extends PureComponent {
  state = {
    fields: {},
    results: [],
    hits: 0,
    isLoading: true,
    queries: []
  }

  async componentDidMount () {
    const fields = await getFields()
    if (fields) {
      this.setState({ fields, isLoading: false })
    }
  }

  // handleQuery = async event => {
  //   this.handleChange(event)
  //   const { target: { value } } = event
  //   const { field } = this.state

  //   const results = await search({ field, query: value })
  //   if (results) {
  //     const { data, hits } = results
  //     this.setState({ results: data, hits })
  //   }
  // }

  handleQueryFormChange = (index, stateObj) => {
    const queries = [...this.state.queries]
    queries[index] = { ...queries[index], ...stateObj }
    this.setState({ queries })
  }

  addQueryForm = () => {
    const queries = [...this.state.queries, {}]
    this.setState({ queries })
  }

  submitQuery = async () => {
    const { queries } = this.state
    const builtQuery = buildQuery(queries)
    console.log('builtQuery --> ', builtQuery)
    const results = await search({ queries: builtQuery })
    if (results) {
      console.log('results --> ', results)
      this.setState({ results })
    }
  }

  render () {
    const { fields, isLoading, queries } = this.state
    console.log('state --> ', this.state)

    return (
      <div className='search'>
        <button onClick={this.addQueryForm}>Add Query</button>
        <button onClick={this.submitQuery}>Submit Query</button>
        {queries.length > 0 &&
          queries.map((query, index) => (
            <QueryForm
              key={index}
              index={index}
              fields={fields}
              isLoading={isLoading}
              handleQueryFormChange={this.handleQueryFormChange}
              {...query}
            />
          ))}
        {/* <ResultsList results={results} field={field} hits={hits} /> */}
      </div>
    )
  }
}
