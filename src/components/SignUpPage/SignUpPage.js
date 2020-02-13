import React, { Component } from 'react';

class SignUpPage extends Component {
  render() {
    return (
      <div className="card text-success mx-auto" style={{ maxWidth: '18rem', top: '120px' }}>
        <div className="card-header text-center">Sign In</div>
        <div className="card-body text-left">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
            <label className="mt-3" htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
            <input className="btn btn-primary btn-block mt-3" type="button" defaultValue="Sign up" />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;