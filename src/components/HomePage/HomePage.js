import React, { Component } from 'react';
import './HomePage.css';
import NoteList from '../NoteList/NoteList';
import AddNoteForm from '../AddNoteForm/AddNoteForm';

class HomePage extends Component {
  render() {
    return (
      <div className="container mt-4 text-left">
        <div className="row">
          <NoteList />
          <AddNoteForm />
        </div>
      </div>
    );
  }
}

export default HomePage;