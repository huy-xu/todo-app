import React, { Component, Fragment } from 'react';
import './CheckItem.css';

import { connect } from 'react-redux';
import { getCheckItemById } from '../../redux/selectors';
import { changeCompleteState } from '../../redux/actions/noteList';

class CheckItem extends Component {
  render() {
    const { noteId, id, checkItem } = this.props;
    return (
      <div className="custom-control custom-checkbox mr-sm-2">
        {(checkItem.isComplete)
          ? <Fragment>
            <input
              type="checkbox"
              className="custom-control-input"
              id={id + noteId}
              defaultChecked
              onChange={() => this.props.changeCompleteState({ noteId: noteId, checkItemId: id, isComplete: checkItem.isComplete })}
            />
          </Fragment>
          : <Fragment>
            <input
              type="checkbox"
              className="custom-control-input"
              id={id + noteId}
              onChange={() => this.props.changeCompleteState({ noteId: noteId, checkItemId: id, isComplete: checkItem.isComplete })}
            />
          </Fragment>}
        <label className="custom-control-label strike-through" htmlFor={id + noteId}>
          {checkItem.content}
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
    changeCompleteState: (payload) => dispatch(changeCompleteState(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckItem);