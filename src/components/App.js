import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
  const [inputValue , setInputvalue] = useState('');
  const [text , setText] = useState('')

  const changeInput =(e)=>{
    setInputvalue(e.target.value)
  
  }
  const buttonClick =()=>{
    setText((prev)=> prev + inputValue);
    setInputvalue('')
  }
  return (
    <div>
    <input id='input' value={inputValue} onChange={(e)=>changeInput(e)} />
    
        <p id='intro'>Concated String</p>
        <p id='text'>{text}</p>
        <button id='button' onClick={()=>buttonClick()}>
          Click me
        </button>
      </div>
  );
}
