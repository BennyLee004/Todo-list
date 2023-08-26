import TodoHeader from "../TodoHeader";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";
const Page = () => {
    return (
        <div className="page-todo">
            <TodoHeader/>
            <TodoList/>
            <TodoFooter/>
        </div>
    )

}

export default Page;