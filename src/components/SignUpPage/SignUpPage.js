import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/auth';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    if (this.props.authenticated) return <Redirect to={ROUTES.HOME} />

    const { email, password, confirmPassword } = this.state;
    const isInvalid = (email === '' || password === '' || password !== confirmPassword);
    return (
      <div className="card bg-transparent text-dark mx-auto" style={{ maxWidth: '18rem', top: '120px' }}>
        <div className="card-header text-center">Sign Up</div>
        <div className="card-body text-left">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              name="email"
              className="form-control" 
              placeholder="Enter email"
              onChange={this.handleChange} 
            />
            <label className="mt-3" htmlFor="password">Password</label>
            <input 
              type="password"
              name="password"
              className="form-control" 
              placeholder="Enter password"
              onChange={this.handleChange} 
            />
            <label className="mt-3" htmlFor="password">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              className="form-control" 
              placeholder="Confirm password"
              onChange={this.handleChange} 
            />
            <input
              className="btn btn-dark btn-block mt-3"
              type="button"
              defaultValue="Sign up"
              disabled={isInvalid}
              onClick={() => this.props.signUp({ email: this.state.email, password: this.state.password })}
            />            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);