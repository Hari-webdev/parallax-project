import React from 'react'
import { useState } from 'react';
import "./todo.css"



const InputArea = (props) => {

    let [inputText,setInputText] = useState("");

    const handleChange =(event)=>{
       const inputvalueText = event.target.value;
       setInputText(inputvalueText);
        
        
    };
          
  return (
    <div className='form'>  
     <input className='input' placeholder="What's up Today-Target" type="text" onChange={handleChange} value={inputText} />
     <button className='add-btn' onClick={()=> {props.value(inputText); 
        setInputText("")}}>
        <span>Add</span>
        </button>
     
     



    </div> 
  );
};

export default InputArea;