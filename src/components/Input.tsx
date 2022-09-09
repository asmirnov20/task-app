import { useRef } from 'react'

interface Props {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Input = ({ task, setTask, handleAdd }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className="input"
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}>
            <input type="input" placeholder="Enter a task..." className="input__box"
                ref={inputRef}
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button className="input__submit" type='submit'>
                Go
            </button>
        </form>
    )
}

export default Input