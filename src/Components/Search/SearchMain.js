import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

import { addItemData, fetchProducts } from "../../Redux/Actions/productsAction";

class SearchMain extends Component {
  state = {
    formValues: { SKU: "", Name: "" },
    textToggle: false,
  };
  handleToggle = () => {
    this.props.toggle();
  };

  handleChange = (e) => {
    const temp = { ...this.state.formValues };
    temp[e.target.name] = e.target.value;

    this.setState((prevState) => ({
      formValues: temp,
    }));
  };

  handleCreateProduct = () => {
    const productData = this.state.formValues;
    this.props.addItemData(productData);
    this.props.fetchProducts();
  };

  render() {
    return (
      <div data-test="todo-form-component" className="todo-form">
        <Form onSubmit={this.handleToggle}>
          <div>
            <Form.Group className="task-name-group">
              <div className="task-name">
                <Form.Label className="task-name-label">SKU</Form.Label>
                <Form.Control
                  className="task-name-control"
                  type="Text"
                  name="SKU"
                  onChange={this.handleChange}
                  value={this.state.formValues.SKU}
                  data-test="input-text-component"
                />
              </div>
              <div className="task-name">
                <Form.Label className="task-name-label">
                  Product Name
                </Form.Label>
                <Form.Control
                  className="task-name-control"
                  type="Text"
                  name="Name"
                  onChange={this.handleChange}
                  value={this.state.formValues.Name}
                  data-test="input-text-component"
                />
              </div>
              <div className="task-name">
                <Form.Label className="task-name-label">Quantity</Form.Label>
                <Form.Control
                  className="task-name-control"
                  type="Text"
                  name="Qty"
                  onChange={this.handleChange}
                  value={this.state.formValues.Qty}
                  data-test="input-text-component"
                />
              </div>
              <div className="task-name">
                <Form.Label className="task-name-label">Price</Form.Label>
                <Form.Control
                  className="task-name-control"
                  type="Text"
                  name="Price"
                  onChange={this.handleChange}
                  value={this.state.formValues.price}
                  data-test="input-text-component"
                />
              </div>
              <div>
                <Button
                  className="task-name-button"
                  variant="primary"
                  type="submit"
                  onClick={this.handleCreateProduct}
                  data-test="submit-button-2"
                >
                  submit
                </Button>
              </div>
            </Form.Group>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemData: (data) => dispatch(addItemData(data)),
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
  };
};

export default connect(null, mapDispatchToProps)(SearchMain);
