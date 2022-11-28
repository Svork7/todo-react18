import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
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

  //добавление функции завершения задачи
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  //удаление всех задач
  const resetTodosHandler = () => {
    setTodos([])
  }

  //удаление завершенных задач
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  //переменная счетчик выполненных задач
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  //console.log(comletedTodosCount)

  return (
    <div className="App">
      <h1 className="header">Todo List</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  )
}

export default App
