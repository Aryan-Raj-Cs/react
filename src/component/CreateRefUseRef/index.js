import React, { useRef, useState ,useEffect} from 'react';
import ClassComponent from "./ClassComponent"

export default function CounterComponent() {
  const countCreateRef = React.createRef({countCreateRef:"test"}); //we cann not initinalize createRef like that
  const [counter,setCounter] =  useState(0)
  const countUseRef = useRef({countUseRef:"test"});

  const handleIncrement = () => {
    // Update the count in the ref
    setCounter(counter+1)
    console.log(countUseRef.current)
    countUseRef.current = {countUseRef:"countUseRef"}
    console.log(countCreateRef.current)
    countCreateRef.current ={countCreateRef:"countCreateRef"}
  };

  return (
    <div>
         <h2>{countUseRef.current?.countUseRef}</h2>
         <h2>{countCreateRef.current?.countCreateRef}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <hr/>
     <ClassComponent/> 
    </div>
  );
}