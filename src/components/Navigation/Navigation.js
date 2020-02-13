import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { connect } from 'react-redux'
import { changeSignInState } from '../../redux/actions/changeSignInState';

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={ROUTES.HOME} className="navbar-brand">TODO</Link>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mt-2 mt-lg-0">
            {this.props.isSignIn
              ? <li className="nav-item active">
                <Link to={ROUTES.LANDING} className="nav-link" onClick={() => this.props.signOut(this.props.isSignIn)}>Sign out</Link>
              </li>
              : <Fragment>
                <li className="nav-item active">
                  <Link to={ROUTES.SIGN_IN} className="nav-link">Sign in</Link>
                </li>
                <li className="nav-item active">
                  <Link to={ROUTES.SIGN_UP} className="nav-link">Sign up</Link>
                </li>
              </Fragment>
            }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  isSignIn: state.navigation.isSignIn
})

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (isSignIn) => dispatch(changeSignInState(isSignIn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
