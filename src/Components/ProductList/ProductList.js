import React, { Component } from "react";

import { connect } from "react-redux";

import DataGrid from "./Table";

import { fetchProducts } from "../../Redux/Actions/productsAction";

class ProductList extends Component {
  componentDidMount() {
    this.triggerFetchProducts();
  }
  triggerFetchProducts = () => {
    this.props.fetchProducts();
  };

  render() {
    let ag_grid = <h1>Loading..</h1>;

    if (this.props.isNewItemAdded) {
      this.triggerFetchProducts();
      ag_grid = <DataGrid />;
    }
    return <div>{ag_grid}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isNewItemAdded: state.addItemDataReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
