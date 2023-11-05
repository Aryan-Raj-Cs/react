import React,{ useState,useEffect,Children } from 'react'
import './App.css';
import About from "./component/About"
import ClassAndFunctional from "./component/ClassAndFunctional"
import Closure from './component/Closure';
import Intersection from './component/IntersectionObserver/Intersection';

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
  return (
    <div className="App">
      {/* <ClassAndFunctional/>
      <About />
      <Closure/> */}
      <Intersection/>
    </div>
  );
}

export default App;
