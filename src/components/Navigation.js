import React, { Component } from "react";
import { render } from "react-dom";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  getLoggedUser = () => {
    return localStorage.getItem("name");
  };

  handleLoggout() {
    localStorage.clear("name");
  }
  loginButton() {
    if (!this.getLoggedUser()) {
      return (
        <NavLink class="btn btn-outline-primary" to="/login">
          Guest Login
        </NavLink>
      );
    } else {
      return (
        <button
          className="btn btn-primary"
          onClick={this.handleLoggout}
        >{`Logged As ${this.getLoggedUser()}, Logout?`}</button>
      );
    }
  }
  render() {
    return (
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">
          <NavLink to="/">Allion Chuun Paan</NavLink>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <NavLink exact to="/orders" className="p-2 text-dark">
            Orders
          </NavLink>
        </nav>
        {this.loginButton()}
      </div>
    );
  }
}
