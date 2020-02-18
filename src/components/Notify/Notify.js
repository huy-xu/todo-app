import React, { Component } from 'react';
import { connect } from 'react-redux';
import { notifyOff } from '../../redux/actions/notify';
import { Alert, AlertContainer } from "react-bs-notifier";

class Notify extends Component {
  render() {
    if (!this.props.isShow) return null;

    return (
      <AlertContainer>
        <Alert type="success" onDismiss={this.props.notifyOff} timeout={1000}>
          {this.props.content}
        </Alert>
      </AlertContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShow: state.notify.isShow,
    content: state.notify.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    notifyOff: () => dispatch(notifyOff())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify);