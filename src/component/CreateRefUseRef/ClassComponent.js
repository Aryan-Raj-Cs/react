import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Creating a ref using createRef
    this.myRef = React.createRef();
    // Initializing a state variable
    this.state = { count: 0 };
  }

  componentDidMount() {
    // Accessing the current property of the ref to focus on the input
    // this.myRef.current.focus();
  }

  handleButtonClick = () => {
    // Updating the state, triggering a re-render
    console.log(this.myRef) // class component mutate object itsel on re-render but functional component create new instance on every re-render
    this.myRef.current = {test:"hello"}
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        {/* Assigning the ref to an input element */}
        {/* <input ref={this.myRef} /> */}
        <h1>{this.myRef.current?.test }</h1>
        <p>Count: {this.state.count}</p>
        {/* Button to trigger a re-render by updating state */}
        <button onClick={this.handleButtonClick}>Increment Count</button>
      </div>
    );
  }
}

export default MyComponent;
