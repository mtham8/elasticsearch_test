import React, { Component } from 'react'
import PropTypes from 'prop-types'

const { array, string, number } = PropTypes

export default class ResultsList extends Component {
  static propTypes = {
    results: array,
    field: string,
    hits: number
  }

  state = {
    showUser: 0
  }

  handleClick = index => {
    this.setState({ showUser: index })
  }

  generateResults = () => {
    const { results, field } = this.props
    const { showUser } = this.state

    return results.map((result, index) => {
      const { username } = result
      return (
        <div key={index} className='result'>
          <div className='expanded-detail'>
            Username: {username}
            <div className='fill' />
            <button onClick={() => this.handleClick(index)}>
              {showUser === index && 'HIDE'}
              {showUser !== index && 'SHOW'}
            </button>
          </div>
          <div>Match: {result[field]}</div>
        </div>
      )
    })
  }

  render () {
    const { results, hits } = this.props
    const { showUser } = this.state

    return (
      <div className='results-list'>
        <div className='results'>
          <div>Total: {hits}</div>
          {results.length > 0 && this.generateResults()}
        </div>
        {results.length > 0 && (
          <div className='expanded-result'>
            <div>Username: {results[showUser].username}</div>
            {Object.entries(results[showUser]).map(([key, value]) => {
              return (
                <div key={key} className='expanded-detail'>
                  <div>{key}</div>
                  <div className='fill' />
                  <div>{value}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}
