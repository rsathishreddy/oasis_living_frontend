import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import "./SearchSection.css";

import SearchMain from "./SearchMain";

class CreateSection extends Component {
  state = { toggle: false };

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  };
  render() {
    return (
      <div>
        <div className="add-task-button" data-test="add-task-button-component">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleToggle}
            data-test="add-task-button"
          >
            <Add /> Add Item
          </Button>
        </div>
        {this.state.toggle ? <SearchMain toggle={this.handleToggle} /> : null}
      </div>
    );
  }
}

export default CreateSection;
