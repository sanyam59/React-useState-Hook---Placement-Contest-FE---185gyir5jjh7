
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 consr App=()=>{
  const[input,setInput]=useState("};
const[term,setTerm]=useState("};
 const handleChange=(e)=>{
   setInput(e.target.value);
  }
  const handleSubmit=(e)=>{
   e.preventDefault();
   setTerm(term+input);
   setInput('');
  }
  
 
  return (
    <div>
  <input id='' type="text" value={input} onChange={handleChange} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='' onClick={handleSubmit}>
        Submit
      </button>
 <p>{term}</p>
    </div>
  );
}
 export defauly App;
