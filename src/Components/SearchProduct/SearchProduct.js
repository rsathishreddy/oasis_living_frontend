import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { connect } from "react-redux";

import {
  retrieveDataForSKU,
  filterProducts,
} from "../../Redux/Actions/productsAction";

import "./SearchProduct.css";

class SearchProduct extends Component {
  state = {
    formValues: { SKU: "", filter: "choose" },
  };

  handleChange = (e) => {
    const temp = { ...this.state.formValues };
    temp[e.target.name] = e.target.value;

    this.setState((prevState) => ({
      formValues: temp,
    }));
  };

  handleSearchProduct = () => {
    const sku = this.state.formValues.SKU;
    this.props.retrieveData(sku);
  };

  handleSelectChanges = (event) => {
    this.props.filterProducts(event.target.value);
  };

  handleRefresh = () => {
    this.props.fetchProducts();
  };

  render() {
    return (
      <div className="task-name-group">
        <div>
          <Form.Label className="task-name-label">SKU</Form.Label>
          <Form.Control
            className="task-name-control"
            type="Text"
            name="SKU"
            onChange={this.handleChange}
            data-test="input-text-component"
          />
        </div>
        <div>
          <Button
            className="task-name-button"
            variant="primary"
            type="submit"
            onClick={(e) => this.handleSearchProduct()}
            data-test="submit-button-2"
          >
            Search
          </Button>
        </div>
        <div>
          <Form.Label className="task-name-label1">Filter By</Form.Label>
          <select
            className="select-class"
            onChange={this.handleSelectChanges}
            data-test="select-component"
          >
            <option value="Choose">Choose</option>
            <option value="availableProducts">Available Products</option>
            <option value="soldout">Sold out Products</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedProducts: state.fetchItemsReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveData: (sku) => dispatch(retrieveDataForSKU(sku)),
    filterProducts: (fil) => dispatch(filterProducts(fil)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
