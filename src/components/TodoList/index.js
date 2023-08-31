import Todo from "../Todo";
export default function TodoList ({todos}) {
    
    return (
        <div className="todo-list">
            {todos.map(value => value.isCompleted === false ? <Todo todo={value.todo} id= "notDone"/>:<Todo todo={value.todo} id= "done"/>)}
        </div>
    )
}
