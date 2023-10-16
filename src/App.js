import { useState } from 'react'
import './App.css';
import About from "./component/About"

function App() {
  const [value, setValue] = useState('mest')
  const inputChange = (value) => {
    setValue(value)
  }
  const submit = () => {
    //  setValue(value)
    console.log("submit")
    setValue(value)
  }
  const submit2 = () => {
    //  setValue(value)
    console.log("submit")
    setValue(value)
  }
  return (
    <div className="App">
      <About />
      <input onChange={(e) => { inputChange(e.target.value) }} />
      <button onClick={() => { submit() }}>Submit</button>
      <button onClick={submit2}>Submit without wrapper</button>
    </div>
  );
}

export default App;
