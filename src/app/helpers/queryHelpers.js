export const FIELD_TYPE_CONDITIONS = {
  text: [
    { label: 'is', value: 'match' },
    { label: 'is not', value: 'matchExclude' },
    { label: 'contains', value: 'match' },
    { label: 'is not null', value: 'nullExists' },
    { label: 'is null', value: 'nullMissing' }
  ],
  float: [
    { label: 'is', value: 'match' },
    { label: 'is greater than or after', value: 'floatGte' },
    { label: 'is less than or before', value: 'floatLte' },
    { label: 'is between', value: 'floatBetween' },
    { label: 'is not null', value: 'nullExists' },
    { label: 'is null', value: 'nullMissing' }
  ],
  boolean: [
    { label: 'is', value: 'boolean' },
    { label: 'is not null', value: 'nullExists' },
    { label: 'is null', value: 'nullMissing' }
  ]
}

const matchHandler = ({ field, query1 }) =>
  field.search('mac_id') > 0 ||
  field === 'gbc_cisr_id' ||
  field.search('uid') > 0
    ? {
      query_type: 'must',
      query: {
        match_phrase_prefix: {
          [field]: query1
        }
      }
    }
    : {
      query_type: 'must',
      query: {
        match: {
          [field]: query1
        }
      }
    }

const excludeHandler = ({ field, query1 }) => ({
  query_type: 'must_not',
  query: {
    match: {
      [field]: query1
    }
  }
})

const existsHandler = ({ field }) => ({
  query_type: 'filter',
  query: {
    exists: {
      field
    }
  }
})

const missingHandler = ({ field }) => ({
  query_type: 'must_not',
  query: {
    exists: {
      field
    }
  }
})

const greaterThanHandler = ({ field, query1 }) => ({
  query_type: 'filter',
  query: {
    range: {
      [field]: {
        gte: query1
      }
    }
  }
})

const lessThanHandler = ({ field, query1 }) => ({
  query_type: 'filter',
  query: {
    range: {
      [field]: {
        lte: query1
      }
    }
  }
})

const betweenHandler = ({ field, query1, query2 }) => ({
  query_type: 'filter',
  query: {
    range: {
      [field]: {
        gte: query1,
        lte: query2
      }
    }
  }
})

const booleanHandler = ({ field, query1 }) => ({
  query_type: 'filter',
  query: {
    term: {
      [field]: query1
    }
  }
})

const queryTypeMap = {
  match: matchHandler,
  matchExclude: excludeHandler,
  nullExists: existsHandler,
  nullMissing: missingHandler,
  floatGte: greaterThanHandler,
  floatLte: lessThanHandler,
  floatBetween: betweenHandler,
  boolean: booleanHandler
}

// const encodeQuery = query => encodeURIComponent(query)

export function buildQuery (queries) {
  return queries.length !== 0
    ? queries.map(queryParams => {
      const { query1, query2, field, queryCondition } = queryParams
      return query1
        ? queryTypeMap[queryCondition]({
          field,
          query1,
          query2
        })
        : null
    })
    : []
}
