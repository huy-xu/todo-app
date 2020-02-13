import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNoteForm, addCheckItem, addNote } from '../../redux/actions/addNoteForm';

import CheckItem from './CheckItem';

class AddNoteForm extends Component {
  handleChange = (event) => {
    const { name, value } = event.target;
    this.props.updateNoteForm({ name: name, value: value });
  }

  handleAddNote = () => {
    let note = {
      title: '',
      content: '',
      checkList: { ...this.props.checkList }
    }

    if (this.props.title === '') {
      note.title = this.props.content;
      note.content = this.props.content;
    } else {
      note.title = this.props.title;
      note.content = this.props.content;
    }
    this.props.addNote({ ...this.state, checkList: { ...this.props.checkList } });
  }

  render() {
    const { title, content } = this.props;
    const checkList = Object.entries(this.props.checkList).map(value => ({ id: value[0], checkItem: value[1] })); //convert object to array   
    return (
      <form className="col-3">
        <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header text-center">Add note</div>
          <div className="card-body text-success">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                name="title"  
                className="form-control" 
                placeholder="Enter title" 
                onChange={this.handleChange} 
              />
              <label className="mt-3" htmlFor="content">Content</label>
              <textarea type="text" 
                name="content"  
                className="form-control" 
                placeholder="Enter content" 
                onChange={this.handleChange} 
              />
              <label className="mt-3" htmlFor="noteChecklist">Checklist</label>
              <button type="button" className="btn btn-light btn-sm ml-2 mb-2" onClick={() => this.props.addCheckItem({ [checkList.length]: {} })}>
                <i className="fa fa-plus-square" />
              </button>
              {checkList.map((value, key) => <CheckItem id={value.id} content={value.checkItem.content} key={key} />)}
            </div>
            <input 
              type="reset"
              className="btn btn-success btn-block" 
              onClick={this.handleAddNote} 
              value="Add"
              disabled={(title === '' && content === '') ? true : false}
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.addNoteForm.title,
    content: state.addNoteForm.content,
    checkList: state.addNoteForm.checkList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNoteForm: (payload) => dispatch(updateNoteForm(payload)),
    addNote: (note) => dispatch(addNote(note)),
    addCheckItem: (checkItem) => dispatch(addCheckItem(checkItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);