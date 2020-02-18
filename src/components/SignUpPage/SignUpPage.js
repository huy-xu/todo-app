import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/auth';

class SignUpPage extends Component {
  render() {
    if (this.props.authenticated) return <Redirect to={ROUTES.HOME} />

    return (
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={values => {
          this.props.signUp({ email: values.email, password: values.password });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters'),
          confirmPassword: Yup.string()
            .required('Required')
            .min(6, 'Password must be at least 6 characters')
            .test('Passwords match', 'Confirm Password & Password must be same', function (value) {
              return this.parent.password === value;
            })
        })}
      >
        {(props) => {
          const { touched, errors, handleChange, handleBlur, handleSubmit } = props;
          return (
            <form className="card bg-transparent text-dark mx-auto" style={{ maxWidth: '18rem', top: '120px' }} onSubmit={handleSubmit}>
              <div className="card-header text-center">Sign Up</div>
              <div className="card-body text-left">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={(errors.email && touched.email) ? "form-control border border-danger" : "form-control"}
                    placeholder="Enter email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email
                    ? <small className="text-danger">{errors.email}</small>
                    : null
                  }
                </div>
                <div className="form-group">
                  <label className="mt-2" htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={(errors.password && touched.password) ? "form-control border border-danger" : "form-control"}
                    placeholder="Enter password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password
                    ? <small className="text-danger">{errors.password}</small>
                    : null
                  }
                </div>
                <div className="form-group">
                  <label className="mt-2" htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={(errors.confirmPassword && touched.confirmPassword) ? "form-control border border-danger" : "form-control"}
                    placeholder="Confirm password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />             
                  {errors.confirmPassword && touched.confirmPassword
                    ? <small className="text-danger">{errors.confirmPassword}</small>
                    : null
                  }
                </div>
                {this.props.error
                  ? <small className="text-danger">Email has already exists</small>
                  : null
                }
                <input
                  className="btn btn-dark btn-block mt-3"
                  type="submit"
                  value="Sign up"
                  disabled={errors.password || errors.email || errors.confirmPassword}                />
                <p className="mt-2">
                  Already have an account?
                  <Link to={ROUTES.SIGN_IN} className="text-decoration-none">  Sign in</Link>
                </p> 
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    error: state.auth.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);