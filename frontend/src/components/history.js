import React, { Component } from "react";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 1,
      activity: [],
    };
  }

  render() {
    return <div>This is the history component</div>;
  }
}
