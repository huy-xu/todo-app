import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCheckItem, addNote } from '../../redux/actions/addNoteForm';

import CheckItem from './CheckItem';

class AddNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      checkList: this.props.checkList
    }
  }
  
  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleAddNote = () => {
    let note = {
      title: '',
      content: '',
      checkList: { ...this.props.checkList }
    }

    if (this.state.title === '' && this.state.content === '') {
      note.title = this.state.checkList[0].content;
    } else if (this.state.title === '') {
      note.title = this.state.content;
      note.content = this.state.content;
    } else {
      note = { ...this.state };
    }
    console.log(note);
    //this.props.addNote({ ...this.state, checkList: { ...this.props.checkList } });
    this.setState({
      title: '',
      content: ''
    });
  }

  render() {
    const checkList = Object.entries(this.props.checkList).map(value => ({ id: value[0], checkItem: value[1] })); //convert object to array
    return (
      <form className="col-3">
        <div className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header text-center">Add note</div>
          <div className="card-body text-success">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" id="title" className="form-control" placeholder="Enter title" onChange={this.onChange} />
              <label className="mt-3" htmlFor="content">Content</label>
              <textarea type="text" name="content" id="content" className="form-control" placeholder="Enter content" onChange={this.onChange} />
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
              disabled={(this.state.title === '' && this.state.content === '') ? true : false}
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkList: state.addNoteForm.checkList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => dispatch(addNote(note)),
    addCheckItem: (checkItem) => dispatch(addCheckItem(checkItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteForm);