import React from 'react'
import "./todo.css"

const Todoitems = (props) => {
  return (

    <div className='input-list' onClick={()=>{props.deleteitems(props.id)}}>

       <li>{props.list} <button className='input-list_btn'>X</button></li>
    </div>
  )
}

export default Todoitems;