import React, { Component } from 'react';
import './CheckItem.css';
import { connect } from 'react-redux';
import { addCheckItem } from '../../redux/actions/addNoteForm';

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      isComplete: false
    }
  }

  changeCompleteStatus = (id) => {
    this.props.addCheckItem({ [id]: { ...this.state, isComplete: !this.state.isComplete } })
    this.setState({ isComplete: !this.state.isComplete });
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState({
      content: value
    });
  }

  render() {
    const { id, content } = this.props;
    return (
      <div className="input-group mb-1">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" onChange={() => this.changeCompleteStatus(id)} />
          </div>
        </div>
        <input
          type="text"
          className={this.state.isComplete ? "form-control strike-through-add-note-form" : "form-control"}
          id={id}
          defaultValue={content}
          onChange={this.onChange}
          onBlur={() => this.props.addCheckItem({ [id]: { ...this.state, content: this.state.content } })}
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