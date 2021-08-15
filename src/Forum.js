import { useState } from 'react'
import './Forum.css'

function Forum() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <section className="Forum">
      <textarea
        cols={80}
        rows={20}
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button
        onClick={() => {
          setMessages((msgs) => [
            { body: text, timestamp: new Date().toISOString() },
            ...msgs,
          ])
          setText('')
        }}
      >
        Post
      </button>
      {messages.map((message) => {
        return (
          <dl>
            <dt>{message.timestamp}</dt>
            <dd>{message.body}</dd>
          </dl>
        )
      })}
    </section>
  )
}

export default Forum
