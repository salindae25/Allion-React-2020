import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";

import OderModal from "../components/OderModal";

import { Button, Card } from "react-bootstrap";

class BakeryItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShow: false,
      item: {}
    };
  }

  showOrderModal(item) {
    if (item != null) {
      this.setState({ isModalShow: true, item: item });
    }
  }

  renderBackeryItems() {
    if (Items != null) {
      const ItemList = Items.map(item => {
        return (
          <div key={item.id} className="col-12 col-lg-3 col-md-4 m-5">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Rs. {item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.showOrderModal(item)}
                >
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      });

      return ItemList;
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderBackeryItems()}
        <OderModal show={this.state.isModalShow} item={this.state.item} />
      </div>
    );
  }
}

export default BakeryItems;
