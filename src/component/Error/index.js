import {useState,useEffect} from 'react'
function About() {
  const [data,setData] = useState()
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        setData(json)
        // Asynchronous Erroe
        // throw new Error("error in async")
        // let obj = {}
        // const data = obj.data.data
        // console.log(data)
    })
    // let obj = {}
    // const data1 = obj.data.data
    // console.log(data1)
    // throw new Error("error in async")
  },[])

  
  const checkError = ()=>{
    let obj = {}
        const data = obj.data.data
        console.log(data)
  }
// const error = () =>{
//     // throw new Error("error in async")
//     let obj = {}
//     const data = obj.data.data
//     console.log(data)
//     return <span>error function</span>
// }
let obj = {}
  return (
    <div >
        <h1>Check Error for Error Boundries</h1>
        <h3>{data?.title}</h3>
        {/* <div>{obj.data.data}</div> */}
        <div>Click event error are not trace by Error Bounderies</div>
        <button onClick={checkError}> Error on Click Event</button>
    </div>
  );
}

export default About;
