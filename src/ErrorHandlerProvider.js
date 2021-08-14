import ErrorHandlerContext from './ErrorHandlerContext'

let setError = () => {}

function ErrorHandlerProvider(props) {
  if (props.callback) {
    setError = props.callback
  }

  return (
    <ErrorHandlerContext.Provider value={setError}>
      {props.children}
    </ErrorHandlerContext.Provider>
  )
}

export default ErrorHandlerProvider
