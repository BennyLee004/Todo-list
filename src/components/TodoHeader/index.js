
import "./style.css"

export default function TodoHeader  () {
    return (
        <div className="todo-header">
            <input
                type="text"
                placeholder="Enter your task here ..."
            />
            <hr/>
        </div>
    )
}