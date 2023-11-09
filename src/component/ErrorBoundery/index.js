import React from 'react'
export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      // Handle the error and set the state to display an error message
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        // Fallback UI for displaying an error message
        return <div>Something went wrong.</div>;
      }
      return this.props.children;
    }
  }