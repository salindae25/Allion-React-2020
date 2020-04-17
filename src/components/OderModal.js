import React, { Component } from "react";
import { render } from "react-dom";
import { Button, Modal } from "react-bootstrap";

class OderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShow: false,
      myOrders: [],
      qty: 0,
      formErrors: {
        qty: "Qty should more than zero"
      },
      qtyValid: false,
      formSubmitted: false,
      orderPrice: 0,
      item: {}
    };

    this.handleQtyChanges = this.handleQtyChanges.bind(this);
  }

  handleClose() {
    this.setState({ isModalShow: false });
  }

  order() {
    this.setState({ formSubmitted: true });
    if (!this.state.qtyValid) {
      const price =
        parseFloat(this.state.orderPrice) * parseFloat(this.state.qty);
      const itemObj = {
        id: this.state.item.id,
        name: this.state.item.name,
        image: this.state.item.image,
        price: price,
        qty: this.state.qty
      };

      let orderList = [];
      orderList = this.state.myOrders;
      orderList.push(itemObj);

      this.setState({ myOrders: orderList, isModalShow: false });

      localStorage.removeItem("myOrder");
      localStorage.setItem("myOrder", this.state.myOrders);
    }
  }

  handleQtyChanges(e) {
    if (e.target.value !== 0) {
      this.setState({ qtyValid: true });
    } else {
      this.setState({ qtyValid: false });
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isModalShow: nextProps.show,
      orderPrice: nextProps.item.price,
      item: nextProps.item
    });
  }

  orderPrice() {
    if (this.state.orderPrice > 0) {
      return (
        <div className="col-sm-5">
          <small>
            <b>Order price - Rs {this.state.orderPrice}</b>
          </small>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <Modal show={this.state.isModalShow}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group row">
              <label htmlFor="qty" className="col-sm-2 col-form-label">
                Qty
              </label>
              <div className="col-sm-5">
                <input
                  type="number"
                  required
                  onChange={this.handleQtyChanges}
                  className={
                    !this.state.qtyValid && this.state.formSubmitted
                      ? "is-invalid form-control"
                      : "form-control"
                  }
                  id="qty"
                  name="qty"
                  placeholder="Qty"
                />
                <div className="invalid-feedback">
                  {this.state.formErrors.qty}
                </div>
              </div>

              {this.orderPrice()}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              No, Thanks
            </Button>
            <Button variant="primary" onClick={() => this.order()}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default OderModal;
