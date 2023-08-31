import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";
import { TODOS } from "../../data/todos";
// import { useState } from "react";

const Page = () => {
    // const [todos, setTodos] = useState(TODOS)
    return (
        <div className="page-todo">
            <TodoHeader/>
            <TodoList todos={TODOS}/>
            <TodoFooter/>

        </div>
    )

}
export default Page;