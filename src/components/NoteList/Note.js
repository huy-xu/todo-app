import React, { Component } from 'react';
import CheckItem from './CheckItem';

import { connect } from 'react-redux';
import { deleteNote, editNote, updateNote } from '../../redux/actions/noteList';
import { notifyOn } from '../../redux/actions/notify';
import { getNoteById } from '../../redux/selectors';

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  handleDeleteNote = () => {
    this.props.deleteNote(this.props.id);
    this.props.notifyOn("Delete note successfully");
  }

  handleEditNote = (event) => {
    const { name, value } = event.target;
    this.props.editNote({ noteId: this.props.id, name: name, value: value });
  }

  handleUpdateNote = () => {
    this.props.updateNote({ noteId: this.props.id, note: this.props.note });
    this.props.notifyOn("Edit note successfully");
    this.setState({ isEdit: !this.state.isEdit });
  }
  
  render() {
    const { isEdit } = this.state;
    const { id, note } = this.props;
    const checkList = note.hasOwnProperty('checkList') ? Object.keys(note.checkList) : [];
    return (
      <div className="card">
        <div className="card-header py-2" role="tab">
          <h5 className="mt-1 float-left">
            {isEdit
              ? <input
                  type="text"
                  name="title"
                  className="form-control text-warning"
                  defaultValue={note.title}
                  onChange={this.handleEditNote}
                />
              : <a className="text-decoration-none text-warning" data-toggle="collapse" data-parent="#noteList" href={'#' + id} aria-expanded="true">
                  {note.title}              
                </a>
            }            
          </h5>
          <button className="btn btn-danger float-right" onClick={this.handleDeleteNote}><i className="fa fa-trash"/></button>
        </div>
        <div id={id} className="collapse in" role="tabpanel">
          <div className="card-body">
            {isEdit
              ? <textarea 
                  type="text"
                  name="content"
                  className="form-control"
                  defaultValue={note.content}
                  onChange={this.handleEditNote}
                />
              : <p>{note.content}</p>
            }
                        
            {checkList.map((checkItemId) => <CheckItem noteId={id} id={checkItemId} isEdit={isEdit} key={checkItemId} />)}

            {isEdit
              ? <button className="btn btn-success mt-2" onClick={this.handleUpdateNote}>
                  <i className="fa fa-save" /> Save
                </button>
              : <button className="btn btn-warning mt-2" onClick={() => this.setState({ isEdit: !this.state.isEdit })}>
                  <i className="fa fa-edit" /> Edit
                </button>
            }            
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
    deleteNote: (noteId) => dispatch(deleteNote(noteId)),
    editNote: (payload) => dispatch(editNote(payload)),
    updateNote: (payload) => dispatch(updateNote(payload)),
    notifyOn: (content) => dispatch(notifyOn(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Note);
