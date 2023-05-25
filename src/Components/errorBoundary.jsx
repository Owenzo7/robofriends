/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class Errorboundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          <h1>Ooops. This is not good</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
