import React, { Component } from 'react';
import './HomePage.css';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { connect } from 'react-redux';

import NoteList from '../NoteList/NoteList';
import AddNoteForm from '../AddNoteForm/AddNoteForm';

class HomePage extends Component {
  render() {
    if (!this.props.authenticated) return <Redirect to={ROUTES.SIGN_IN} />

    return (
      <div className="HomePage container mt-4 p-0 text-left">
        <div className="row justify-content-center">
          <NoteList />
          <AddNoteForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(HomePage);