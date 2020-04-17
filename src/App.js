import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import BakeryItems from "./components/BakeryItems";
import Navigation from "./components/Navigation";
import MyOrders from "./components/MyOrders";
import Login from "./components/Login";
import { render } from "react-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem("name")
    };
  }

  getLoggedUser = () => {
    return localStorage.getItem("name");
  };
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route path="/" exact component={BakeryItems} />
          <Route path="/orders" exact component={MyOrders} />
          <Route path="/login" exact component={Login} />
        </Switch>
        <Footer />
      </>
    );
  }
}
