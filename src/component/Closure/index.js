import React,{ useState,useEffect,Children } from 'react'

function Closure({children}) {
  const [value, setValue] = useState('mest')
  
  const inputChange = (value) => {
    setValue(value)
  }
  const submit = () => {
    console.log("submit")
  }
  const submit2 = () => {
    console.log("submit2")
    setValue(value)
  }
  return (
    <div className="App">
      <h1> how Closure works in React component</h1>
      <input onChange={(e) => { inputChange(e.target.value) }} />
      <button onClick={() => { submit() }}>Submit</button>
      <button onClick={submit2}>Submit without wrapper</button>
      {/* <input onChange={inputChange} /> */}
    </div>
  );
}

export default Closure;
