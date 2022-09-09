import React from 'react';
import './App.css';
import Input from './components/Input'
import { useState } from 'react';
import { Todo } from './interface';
import TodoList from './components/TodoList';

const App: React.FC = () => {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (task) {
      setTodos([...todos, {
        id: Date.now(),
        task: task,
        isDone: false
      }]);

      setTask('')
    }
  }

  return (
    <div className="App">
      <span className="heading">Tasks</span>
      <Input task={task} setTask={setTask} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
