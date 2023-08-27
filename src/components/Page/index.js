import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";
import { todos } from "../../data/todos";
const Page = () => {

    return (

        <div className="page-todo">
            
            <TodoHeader/>
            <TodoList todo={todos}/>
            <TodoFooter/>
    
        </div>
    )

}

export default Page;