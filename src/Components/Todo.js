import React from 'react'
import{RiCloseCircleLine} from 'react-icons/ri'
import {TiTick}from 'react-icons/ti'
export default function Todo({todos,completetask,removetask}) {



  return todos.map((todo,index)=>(
   <div className={todo.isComplete ? 'complete task-div' : 'task-div'} key={index}>
    <div className="todo-text">{todo.text}</div>
    <div className='icons' key={todo.id}>
        <TiTick className={ todo.isComplete? 'hide' :'tick'} onClick={() => {completetask(todo.id)}}></TiTick>
        <RiCloseCircleLine className='cross' onClick = {() => { removetask(todo.id)}}></RiCloseCircleLine>
    </div>
   </div> 
  ));
  
}
