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
    return (
      <div className="h-screen bg-indigo-700 w-60 container">
        <div className="min-w-12 text-white">asdasd</div>
      </div>
    );
  }
}
