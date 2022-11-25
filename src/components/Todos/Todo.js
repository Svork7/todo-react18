import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'
console.log(styles)

function Todo({ todo, index, deleteTodo }) {
  return (
    /*удаление по двойному клику*/
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.icon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
