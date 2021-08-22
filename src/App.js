import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useForum from './useForum'

function App() {
  const {
    data: messages,
    loading: messagesLoading,
    error: messagesError,
    create: createMessage,
    creating: creatingMessage,
  } = useForum('nasa')

  const [text, setText] = useState()
  const [author, setAuthor] = useState()
  const [createMessageError, setCreateMessageError] = useState()

  return (
    <div className="App">
      <input
        type="text"
        value={author}
        placeholder="author"
        onChange={(evt) => setAuthor(evt.target.value)}
      />

      <textarea
        cols="30"
        rows="10"
        value={text}
        placeholder="Message"
        onChange={(evt) => setText(evt.target.value)}
      />
      <button
        onClick={async () => {
          try {
            await createMessage({ author, text })
            setText('')
            setAuthor('')
          } catch (err) {
            setCreateMessageError(err)
          }
        }}
        disabled={creatingMessage}
      >
        Post
      </button>
      {createMessageError ? (
        <div className="error">
          Unable to create message
          <div className="error-contents">{createMessageError.message}</div>
        </div>
      ) : null}
      {messagesError ? (
        <div className="error">
          Something went wrong:
          <div className="error-contents">{messagesError.message}</div>
        </div>
      ) : messagesLoading ? (
        <div className="loading">Loading...</div>
      ) : messages && messages.length ? (
        <dl>
          {messages.map((message) => (
            <>
              <dt>{message.author} </dt>
              <dd>{message.text}</dd>
            </>
          ))}
        </dl>
      ) : (
        'No message'
      )}
    </div>
  )
}

export default App
