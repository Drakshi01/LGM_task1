import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


export default function TodoList() {
// State Array which hold all TODOS
const[todos,setTodos]= useState([]);


// Add to-do to list
const addTask = task => {
    if(!task.text){
        return
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
}


// Remove todo from list
const removetask = id =>
{
    let updatedTasks = [...todos].filter(task => task.id !== id);
    setTodos(updatedTasks);
}

//  Task is completed
const completetask = id => {
 let updatedTasks = todos.map(todo=>{
    if (todo.id === id){
        todo.isComplete = true;
    }
    return todo;
 })
 setTodos(updatedTasks)
}
 
  return (
    <div>
      <TodoForm addTask = {addTask}></TodoForm>
      <Todo todos={todos} completetask={completetask} removetask={removetask}> </Todo>
    </div>
  )
}
