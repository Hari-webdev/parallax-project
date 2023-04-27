import React, { useState } from 'react'
import Inputarea from './inputarea'
import Todoitems from './To-do_items'
import "./todo.css"

const App = () => {
 
  const [items,setItems]= useState([]);

  function addItem(inputText){
    setItems((previtems)=>{
      return [...previtems,inputText];
    }); 
   
  }

  function deleteitems(id){
    setItems((previtems)=>{ 
      return previtems.filter((value,index)=>{
        return index !== id;
      })
      

    })
  }
 console.log(items);
   

  return (
    <div className='container'>
      <div className='header'>
        <h1>To-Do List</h1>
      </div>
      <Inputarea value={addItem} />
      <div>
        <ul>
          {
            items.map((value,index)=>{
              return <Todoitems key={index} list={value}  id={index} deleteitems={deleteitems} />
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default App