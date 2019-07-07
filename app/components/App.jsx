import React from 'react'
import ReactDOM from 'react-dom'
import uuid from 'uuid'

import Notes from './Notes'

const notes = [
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([
        {
          id: uuid.v4(),
          task: 'New Task'
        }
      ])
    })
  }

  deleteNote = (id, e) => {
    e.stopPropagation()
    this.setState({
      notes: this.state.notes.filter((note) => note.id !== id)
    })
  }

  activeNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = true
        }

        return note
      })
    })
  }

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if(note.id === id) {
          note.editing = false
          note.task = task
        }

        return note
      })
    })
  }

  render() {
    const { notes } = this.state

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes
          notes={notes}
          onNoteClick={this.activeNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    )
  }

}
