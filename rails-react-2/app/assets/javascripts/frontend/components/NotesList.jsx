import React from 'react';
import Note from './Note';
import NoteAddNote from './NoteAddNote';

export default class NotesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { notes: this.props.notes }
    this.state = {noteText: "text"}
  }

  addNote(noteToAdd) {
    let newNotes = this.state.notes;
    newNotes.unshift({body: noteToAdd})
    this.setState({notes: newNotes})
  }

  getInitialState() {
    this.setState({noteText: "text"})
  }

  handleChildClick(event) {
    event.preventDefault()
    console.log(event.target)
    // alert("The Child button text is: ");
    // alert("The Child HTML is: " + event.target.outerHTML);
  }

  render() {
    let notes = this.props.notes.map(note => <Note {... note }/>)
    return (
      <div>
      {
        notes
      }
      <NoteAddNote onClick={this.handleChildClick} text={this.state.noteText} />
      </div>
    )
  }
}