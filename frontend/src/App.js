import React, { Component } from "react";
import Sidebar from "./components/sidebar";

export default class App extends Component {
  render() {
    return (
      <div className="flex">
        <Sidebar />
        <h1 className="text-4xl">Header for test</h1>
      </div>
    );
  }
}
