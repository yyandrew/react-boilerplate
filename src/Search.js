import './App.css'
import { useState } from 'react'
import useSearch from './useSearch'

function Search() {
  const [terms, setTerms] = useState()
  const { data: results } = useSearch(terms)

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

export default Search
