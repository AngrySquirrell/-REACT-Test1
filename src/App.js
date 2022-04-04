import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import {useState,useEffect} from 'react'


function App() {
  const [str,setStr]=useState("")
  useEffect(() => {
    
  setStr(localStorage.getItem("futurtitle"))
    
  }, [])
  
  return (
    
    <div className="App">
      <h1 className="title">{str}</h1>
      <Input onChanged={setStr}/>
    </div>
  );
}

export default App;