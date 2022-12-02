import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      active: 1,
    };
  }

  render() {
    return <div>This is the Sidebar</div>;
  }
}
