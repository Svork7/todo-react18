import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
console.log(styles)
//работа с индексом массива
//function Todo({ todo, index, deleteTodo }) {
function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    /*удаление по двойному клику*/
    /*<div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.icon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )*/
    //работа с объектами
    //удаление по двойному нажатию
    //< className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
    //<div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
    //добавление класса и изменение интерфеса выполненной задачи
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.icon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      {/*удаление по клику на иконку*/}
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
