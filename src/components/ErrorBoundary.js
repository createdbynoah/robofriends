import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError)
      return <h2 className="error-message">Something went wrong. :(</h2>;
    return this.props.children;
  }
}

export default ErrorBoundary;
