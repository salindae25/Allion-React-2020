import React, { Component } from "react";
import { render } from "react-dom";

export default class Footer extends Component {
  render() {
    const mystyle = {
      color: "blue",
      padding: "10px"
    };
    return (
      <div style={mystyle}>
        <center>Copyrights Allion Technologies (2020 React Hackothon)</center>
      </div>
    );
  }
}
