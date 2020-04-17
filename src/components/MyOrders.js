import React, { Component } from "react";
import { render } from "react-dom";

export default class MyOrders extends Component {
  render() {
    let items = [];
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th />
                  <th>Bakery Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => {
                  return (
                    <tr>
                      <td className="col-1">2</td>
                      <td className="col-1">
                        <img width="120" src="" alt="" />
                      </td>
                      <td>Pizza</td>
                      <td className="col-1">1</td>
                      <td className="col-2">Rs 120</td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="col-1">2</td>
                  <td className="col-1">
                    <img width="120" src="" alt="" />
                  </td>
                  <td>Pizza</td>
                  <td className="col-1">1</td>
                  <td className="col-2">Rs 120</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-10" />
          <div className="col-md-2 text-right">
            <button type="button" className="btn btn-primary">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
