export function ToDoItem({completed,id,title,todoToggle,deleteTodo}){
    return(
        <li key = {id}>
            <label>
            <input 
            type="checkbox" checked={completed}
            onChange={(e)=> todoToggle(id,e.target.checked)}
            />
            {title}
            </label>
            <button 
            onClick = {() => deleteTodo(id)}
            className="btn btn-danger"
            >
            Delete
            </button>
        </li>
    );
}