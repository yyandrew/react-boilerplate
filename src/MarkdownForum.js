import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

function MarkdownForum() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])

  return (
    <section>
      <MDEditor height={300} value={text} onChange={setText}>
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
              <dd>
                <MDEditor.Markdown source={message.body} />
              </dd>
            </dl>
          )
        })}
      </MDEditor>
    </section>
  )
}

export default MarkdownForum
