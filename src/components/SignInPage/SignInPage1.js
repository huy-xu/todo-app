import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { connect } from 'react-redux';
import { signIn } from '../../redux/actions/auth';

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if (this.props.authenticated) return <Redirect to={ROUTES.HOME} />

    const { email, password } = this.state;
    const isInvalid = (email === '' || password === '');
    return (
      <div className="card bg-transparent text-dark mx-auto" style={{ maxWidth: '18rem', top: '120px' }}>
        <div className="card-header text-center">Sign In</div>
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
            <input
              className="btn btn-dark btn-block mt-3"
              type="button"
              defaultValue="Sign in"
              disabled={isInvalid}
              onClick={() => this.props.signIn({ email: this.state.email, password: this.state.password })}
            />
            <p className="mt-2">
              Don't have an account?  
              <Link to={ROUTES.SIGN_UP} className="text-decoration-none">  Sign up</Link>  
            </p>                        
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
    signIn: (user) => dispatch(signIn(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);