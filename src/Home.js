import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="Public">
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/private1">Private page 1</Link>
        </li>
        <li>
          <Link to="/private2">Private page 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home