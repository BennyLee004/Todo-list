import { TODOS } from "../../data/todos"
export default function TodoFooter (key) {
    const notCompleted = TODOS.filter(todo => todo.isCompleted === false)

    return (
        <div className="todo-footer">
            <p>{notCompleted.length} task left!</p>
            <p>MindX todolist</p>
        </div>
    )
}