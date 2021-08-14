import ErrorContainer from './ErrorContainer'
import './App.css'
import ClockIn from './ClockIn'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <ErrorContainer>
        <ClockIn />
      </ErrorContainer>
    </div>
  )
}

export default App
