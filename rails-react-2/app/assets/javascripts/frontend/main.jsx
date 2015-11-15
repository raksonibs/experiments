import React from 'react';

import NotesList from './components/NotesList'

let notes = [
  {id: 1, body: 'english text'},
  {id: 2, body: 'other text'},
]

React.render(
  <NotesList notes={ notes} />, 
  document.getElementById('hello')
);