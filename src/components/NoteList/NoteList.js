import React, { Component } from 'react';
import Note from './Note';

import { connect } from 'react-redux';
import { getNoteList } from '../../redux/actions/noteList';
import { getNoteIds } from '../../redux/selectors';

class NoteList extends Component {  
  componentDidMount() {
    this.props.getNoteList();
  }
    
  render() { 
    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          {this.props.noteList.map((noteId, key) => <Note id={noteId} key={key} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noteList: getNoteIds(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNoteList: () => dispatch(getNoteList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);