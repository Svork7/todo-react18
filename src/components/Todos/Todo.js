import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
console.log(styles)
//работа с индексом массива
//function Todo({ todo, index, deleteTodo }) {
function Todo({ todo, deleteTodo }) {
  return (
    /*удаление по двойному клику*/
    /*<div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.icon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )*/
    //работа с объектами
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiTodoFill className={styles.icon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  )
}

export default Todo
