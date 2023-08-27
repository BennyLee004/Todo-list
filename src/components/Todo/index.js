

export default function Todo(props) {
    return (
        <div className="todo" id={props.id}>
            <input type="radio" checked={props.check}/>
            <p>{props.todo}</p>
        </div>
    )
}

