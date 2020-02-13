import React, { Component, Fragment } from 'react';
import './CheckItem.css';

import { connect } from 'react-redux';
import { getCheckItemById } from '../../redux/selectors';
import { changeCompleteState, editCheckItem } from '../../redux/actions/noteList';

class CheckItem extends Component {
  handleEditCheckItemIsComplete = (event) => {
    const { checked } = event.target;
    this.props.editCheckItem({ noteId: this.props.noteId, checkItemId: this.props.id, name: 'isComplete', value: checked });
  }

  handleEditCheckItemContent = (event) => {
    const { value } = event.target;
    this.props.editCheckItem({ noteId: this.props.noteId, checkItemId: this.props.id, name: 'content', value: value });
  }

  render() {
    const { noteId, id, isEdit, checkItem } = this.props;
    return (
      <div className="custom-control custom-checkbox mr-sm-2 mt-2">
        <input
          type="checkbox"
          name="isComplete"
          className="custom-control-input"
          id={id + noteId}
          defaultChecked={checkItem.isComplete ? true : false}
          onChange={isEdit
            ? this.handleEditCheckItemIsComplete
            : () => this.props.changeCompleteState({ noteId: noteId, checkItemId: id, isComplete: checkItem.isComplete })
          }
        />       
        <label className="custom-control-label strike-through" htmlFor={id + noteId}>
          {isEdit
            ? <input 
              type="text"
              name="content"
              className="form-control"
              id={id + noteId}
              defaultValue={checkItem.content}
              onChange={this.handleEditCheckItemContent}
            />
            : <Fragment>
                {checkItem.content}
              </Fragment>         
          }           
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { noteId, id } = ownProps;
  return {
    checkItem: getCheckItemById(state, noteId, id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCompleteState: (payload) => dispatch(changeCompleteState(payload)),
    editCheckItem: (payload) => dispatch(editCheckItem(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckItem);