
export default function Todo(props) {
    return (
        <div className="todo">
            <input type="radio"/>
            <p>{props.todo}</p>
        </div>
    )
}