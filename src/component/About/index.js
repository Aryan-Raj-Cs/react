import {useState,useEffect} from 'react'
import logo from '../../logo.svg';

function About() {
  const [data,setData] = useState()
  const [nameArray,setNameArray] = useState()
// check for renderToString it will reflect  in renderToString 
// const [nameArray,setNameArray] = useState(['aryan','mohan','sohan','amit'])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        setData(json)
    })
    //renderToString  doesNot call component lifecycle method
    setNameArray(['aryan','mohan','sohan','amit'])
  },[])


  return (
    <div >
        <h1>Aryan Raj</h1>
        <h3>{data?.title}</h3>
        <img src ={logo} alt='logo' />
        {nameArray && nameArray.map((data)=>{
            return(
                <div>
                    {data}
                    </div>
            )
        })}

   
    </div>
  );
}

export default About;
