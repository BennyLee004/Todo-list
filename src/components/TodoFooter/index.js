import { todos } from "../../data/todos"
export default function TodoFooter () {
    const notCompleted = todos.filter(todo => todo.isCompleted === false)
    return (
        <div className="todo-footer">
            <p>{notCompleted.length} task left!</p>
            <p>MindX todolist</p>
        </div>
    )
}