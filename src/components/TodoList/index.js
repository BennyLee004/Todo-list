import Todo from "../Todo";

export default function TodoList (props) {
    const listTodo = Object.keys(props.todo).map(function(value) {
        if (props.todo[value].isCompleted === true) {
            return <Todo todo={props.todo[value].todo} id="done" check='checked'/>   
        } else {
            return <Todo todo={props.todo[value].todo}/>
        }
    })
    return (
        <div className="todo-list">
            {listTodo}
        </div>
    )
}