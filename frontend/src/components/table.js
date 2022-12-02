import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  render() {
    return <div>This is the table</div>;
  }
}
