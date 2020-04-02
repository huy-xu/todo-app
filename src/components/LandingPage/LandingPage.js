import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage text-center">
        <div className="bg-image"></div>
        <div className="bg-text p-5">
          <h1 className="display-1 text-light" style={{ fontSize: "10vw" }}>
            Create your TODO list
          </h1>
          <Link to={ROUTES.SIGN_IN}>
            <button type="button" className="btn btn-outline-light btn-lg">
              Get start
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
