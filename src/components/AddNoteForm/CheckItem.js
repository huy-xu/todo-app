import React, { Component } from 'react';
import './CheckItem.css';
import { connect } from 'react-redux';
import { addCheckItem } from '../../redux/actions/addNoteForm';

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false
    }
  }

  changeCompleteStatus = () => {
    const { content } = this.props;
    if (typeof(content) === 'undefined' || content === '') {
      this.props.addCheckItem({ [this.props.id]: {} });
    } else {
      this.props.addCheckItem({ [this.props.id]: { content: content, isComplete: !this.state.isComplete } })
    }    
    this.setState({ isComplete: !this.state.isComplete });
  }

  handleAddCheckItem = (event) => {
    if (event.target.value === '') {
      this.props.addCheckItem({ [this.props.id]: {} });
    } else {
      this.props.addCheckItem({ [this.props.id]: { ...this.state, content: event.target.value } })
    }
  }

  render() {
    const { id, content } = this.props;
    return (
      <div className="input-group mb-1">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" onChange={this.changeCompleteStatus} />
          </div>
        </div>
        <input
          type="text"
          className={this.state.isComplete ? "form-control strike-through-add-note-form" : "form-control"}
          id={id}
          defaultValue={content}
          onChange={this.handleAddCheckItem}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCheckItem: (checkItem) => dispatch(addCheckItem(checkItem))
  }
}

export default connect(null, mapDispatchToProps)(CheckItem);