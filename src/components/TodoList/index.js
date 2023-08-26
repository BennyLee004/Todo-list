import Todo from "../Todo";

export default function TodoList () {
    return (
        <div className="todo-list">
            <Todo todo={"Clean up bedroom"}/>
            <Todo todo={"Buy some milk"}/>
            <Todo todo={"Jogging"}/>
            <Todo todo={"Learn React"}/>
            <Todo todo={"Doing Exercise"}/>
        </div>
    )
}