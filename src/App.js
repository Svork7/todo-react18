import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  //структура данных - массив строк
  /*const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }*/
  //структура данных - массив объектов
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    // console.log(newTodo)
    setTodos([...todos, newTodo])
  }

  //привязываться к элементу в массиве не рекомендуется
  /*const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }*/

  //удаление задачи с уникальным идентификатором
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1 className="header">Todo List</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
