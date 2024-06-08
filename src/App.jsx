import "./styles.css"
import { useEffect, useState } from "react"
import NewTododForm from "./NewTodoForm";
import { ToDoList } from "./ToDoList";

export default function App(){
  const [newItem , setNewItem ] = useState("");
  // const [todos , setTodos] = useState(()=>{
  //   const localvalues = localStorage.getItem("ITEMS");
  //   if(localvalues == null) return [] 
  //   return JSON.parse(localvalues);
  // });
  const [todos , setTodos] = useState([]);

  // UseEffect hook : whenever the thing which are in 2nd arguement changes (here -> todos) , run the function which is in 1st arguement.
  // useEffect(()=>{
  //   localStorage.setItem("ITEMS" . JSON.stringify(todos))
  // }, [todos])


  function todoToggle(id,completed){
    setTodos(currentTodos => {
      return(
        currentTodos.map(todo=>{
          if(todo.id === id){
            return {...todo,completed};
          }
          return todo;
        })
      )
    })
  }

  function addTodos(title){
    setTodos(currentTodos => {
      return [...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      <NewTododForm onSubmit = {addTodos}/>
      <h1 className="header">Todo List</h1>
      <ToDoList todos={todos} todoToggle={todoToggle} deleteTodo={deleteTodo}/>
    </>
   
  )
}