import { ToDoItem } from "./ToDoItem";

export function ToDoList({todos , todoToggle , deleteTodo}){
    return(
        <ul className="list">
        {/* the below is short circuiting */}
        {todos.length === 0 && "No Items"} 
        {todos.map(todo => {
          return (
            <ToDoItem id={todo.id} completed = {todo.completed} title={todo.title} todoToggle = {todoToggle} deleteTodo={deleteTodo}/>
            
          );
        })}

      </ul>
    );
}