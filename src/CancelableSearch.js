import React, { useState } from 'react'
import useCancelableSearch from './useCancelableSearch'

function CancelableSearch() {
  const [terms, setTerms] = useState()
  const { data: results } = useCancelableSearch(terms)

  return (
    <div className="App">
      <input
        type="text"
        placehold="Search..."
        value={terms}
        onChange={(e) => setTerms(e.target.value)}
      />
      {results && results.length ? (
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          {results.map((result) => (
            <tr>
              <td>{result.name}</td>
              <td>{result.state}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>No results</p>
      )}
    </div>
  )
}

export default CancelableSearch
