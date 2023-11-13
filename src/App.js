import React,{ useState,useEffect,Children } from 'react'
import './App.css';
import About from "./component/About"
import ClassAndFunctional from "./component/ClassAndFunctional"
import Closure from './component/Closure';
import Intersection from './component/IntersectionObserver/Intersection';
import Error from "./component/Error"
import CounterComponent from './component/CreateRefUseRef';

function App({children}) {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCount(count + 1);
  //     setCount((prevCount) => prevCount + 1);
  //     console.log("inner", count);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  let obj = {"title":"aryan"}
  let arr = [1,2,3]
  const element = React.createElement("div", null, obj.title, arr.map(function (val) {
    return React.createElement("h1", null, val);
  }))
  console.log("element",element)
  return (
    <div className="App">
      {/* <ClassAndFunctional/>
      <About />
      <Closure/> */}
      {/* <Intersection/> */}
      <CounterComponent/>
      {/* <Error/> */}

      
    </div>
  );
}

export default App;
