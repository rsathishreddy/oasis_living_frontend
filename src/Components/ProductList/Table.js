import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "./Table.css";

import { connect } from "react-redux";

class DataGrid extends Component {
  modules = AllCommunityModules;
  columnDefs = [
    {
      headerName: "SKU",
      field: "SKU",
    },
    {
      headerName: "Product Name",
      field: "Name",
    },
    {
      headerName: "Quantity",
      field: "Qty",
    },
    {
      headerName: "Price",
      field: "Price",
    },
  ];

  defaultColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  };

  render() {
    let row = this.props.fetchedProducts;
    if (this.props.searchedProduct.length !== 0) {
      row = this.props.searchedProduct;
    }
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          modules={this.modules}
          rowData={row}
          columnDefs={this.columnDefs}
          defaultColDef={this.defaultColDef}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchedProducts: state.fetchItemsReducer.data,
    searchedProduct: state.SearchProductsReducer.data,
    //filteredProducts: state.filteredProductsReducer.data,
  };
};

export default connect(mapStateToProps)(DataGrid);
