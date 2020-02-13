import React, { Component } from 'react';
import CheckItem from './CheckItem';

import { connect } from 'react-redux';
import { deleteNote } from '../../redux/actions/noteList';
import { getNoteById } from '../../redux/selectors';

export class Note extends Component {
  render() {
    const { id, note } = this.props;
    const checkList = note.hasOwnProperty('checkList') ? Object.keys(note.checkList) : [];
    return (
      <div className="card">
        <div className="card-header py-2" role="tab">
          <h5 className="mt-1 float-left">
            <a className="text-decoration-none text-warning" data-toggle="collapse" data-parent="#noteList" href={'#' + id} aria-expanded="true">
              {note.title}
            </a>
          </h5>
          <button type="button" className="btn btn-danger btn-sm mt-1 float-right" onClick={() => this.props.deleteNote(id)}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
        <div id={id} className="collapse in" role="tabpanel">
          <div className="card-body">
            <p>{note.content}</p>
            {checkList.map((checkItemId) => <CheckItem noteId={id} id={checkItemId}  key={checkItemId} />)}
          </div>         
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    note: getNoteById(state, id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (noteId) => dispatch(deleteNote(noteId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
