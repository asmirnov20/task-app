import { Todo } from "../interface"
import SingleTodo from "./SingleTodo";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: Props) => {
    return (
        <div className="todos">
            {todos.map(item => (
                <SingleTodo
                    item={item}
                    todos={todos}
                    setTodos={setTodos}
                    key={item.id}
                />
            ))}
        </div>
    )
}

export default TodoList