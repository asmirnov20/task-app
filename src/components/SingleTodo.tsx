import { Todo } from "../interface"
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { useEffect, useState, useRef } from 'react'

type Props = {
    item: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ item, todos, setTodos }: Props) => {

    const { task, id, isDone } = item
    const [edit, setEdit] = useState<boolean>(false)
    const [editItem, setEditItem] = useState<string>(task)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {

        inputRef.current?.focus()

    }, [edit])

    const handleDone = (id: number) => {
        setTodos(
            todos.map(item =>
                item.id === id ? { ...item, isDone: !isDone } : item)
        )
    }

    const handleDelete = (id: number) => {
        setTodos(
            todos.filter(item => item.id !== id)
        )
    }

    const handleEdit = () => {
        if (!edit && !isDone) {
            setEdit(!edit)
        }
    }

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault()

        setTodos(todos.map(item =>
            item.id === id
                ? { ...item, task: editItem }
                : item
        ))

        setEdit(false)
    }

    return (
        <form className="todos__single" onSubmit={(e) => handleSubmit(e, id)}>

            {edit ? (
                <input type="text"
                    value={editItem}
                    onChange={e => setEditItem(e.target.value)}
                    className='todos__single--text'
                    ref={inputRef}
                />
            ) : isDone ? (
                <s className="todos__single--text">
                    {task}
                </s>

            ) : (
                <span className="todos__single--text">
                    {task}
                </span>
            )}
            <div>
                <span className="icon" onClick={() => handleDone(id)}>
                    <MdDone />
                </span>
                <span className="icon" onClick={() => handleEdit()}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(id)}>
                    <AiFillDelete />
                </span>
            </div>
        </form >
    )
}

export default SingleTodo