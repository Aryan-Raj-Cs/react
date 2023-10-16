import {useState,useEffect} from 'react'
import logo from '../../logo.svg';

function About() {
  const [data,setData] = useState()
  const [nameArray,setNameArray] = useState()
// const [nameArray,setNameArray] = useState(['aryan','mohan','sohan','amit'])
// it will reflect  in renderToString 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        setData(json)
    })
    //it will not reflect to renderToString because  renderToString doesNot call component lifecycle method
    setNameArray(['aryan','mohan','sohan','amit'])
  },[])


  return (
    <div >
        <h1>Aryan Raj</h1>
        <h3>{data?.title}</h3>
        <img src ={logo} alt='logo' width='100px' height='100px'/>
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
