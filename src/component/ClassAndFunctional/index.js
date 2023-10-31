import React,{ useState,useEffect,Children } from 'react'
class ClassComponent extends React.Component {
    constructor(props){
     super(props)
     console.log("call with created time only not on every re-render")
    }
    state = {
      count: 0
    };
  
    componentDidMount() {
      console.log('ClassComponent mounted');
    }
  
    render() {
      return (
        <div>
          <h1>ClassComponent: {this.state.count}</h1>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Increment
          </button>
        </div>
      );
    }
  }
  
  const FunctionalComponent = () => {
    const [count, setCount] = React.useState(0);
  
    console.log('FunctionalComponent rendered');
  
    return (
      <div>
        <h1>FunctionalComponent: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  
  const App = () => {
    const [renderCount, setRenderCount] = React.useState(0);
  
    return (
      <div>
        <h2>To prove that class components re-render existing instances while functional components re-render new instances</h2>
        <button onClick={() => setRenderCount(renderCount + 1)}>Re-render</button>
  
        <ClassComponent />
        <FunctionalComponent />
      </div>
    );
  };
  export default App
  