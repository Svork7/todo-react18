import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {/*если в списке задач ничего нет, то выведется текст ниже*/}
      {/*ключ по индексу - НЕ РЕКОМЕНДУЕТСЯ
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
      */}
      {/*присвоение уникального айди*/}
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  )
}

export default TodoList
