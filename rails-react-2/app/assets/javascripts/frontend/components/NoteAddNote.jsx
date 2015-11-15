import React from 'react';
import Note from './Note';

export default class NoteAddNote extends React.Component {
  sendNote(event) {
    event.preventDefault();
    console.log(this.props)
    this.props.addNote(this.refs.noteTextArea.value)
    console.log(this.refs)
    this.refs.noteTextArea.value = "";
  }
  render() {
    return (
        // <form>
        //   <textarea ref="noteTextArea" />
          <button onClick={this.props.onClick}> {this.props.text }</button>
        // </form>
    )
  }
}