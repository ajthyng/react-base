// import React from "react";
// import ReactDOM from "react-dom";

const React = require('react');
const ReactDOM = require('react-dom');

class Layout extends React.Component {
  render() {
    return (
      <h1>Hello, world!</h1>
    )
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);