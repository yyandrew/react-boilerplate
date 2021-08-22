import './App.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Search() {
  const [terms, setTerms] = useState()
  const { data: results, error, loading } = useSelector(
    (state) => state.searchResults || {}
  )
  const dispatch = useDispatch()

  return (
    <div className="App">
      <input
        type="text"
        placehold="Search..."
        value={terms}
        onChange={(e) => {
          setTerms(e.target.value)
          dispatch({
            type: 'SEARCH',
            payload: e.target.value,
          })
        }}
      />
      {error ? (
        <p>Error: {error.message}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : results && results.length ? (
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
