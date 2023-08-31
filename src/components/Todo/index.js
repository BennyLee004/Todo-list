
import * as Icon from 'react-feather';
import { useState } from 'react';

export default function Todo(key) {
    const [clickComplete, setClickComplete] = useState(key)
    const handleCLick = () => {
        clickComplete.id === 'done'? setClickComplete({... clickComplete,id: "notDone" }):setClickComplete({... clickComplete,id: "done"}) 
    }
    return (
        <div className="todo" id={clickComplete.id} onClick={handleCLick}>
            {clickComplete.id == 'notDone' ? <Icon.Circle color="grey" size={22}/> :<Icon.CheckCircle color="grey" size={22}/>}
            <p>{clickComplete.todo}</p>
        </div>
    )
}

