import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/*использование встроенного компонента button
        <button type="submit">Add</button>*/}
        {/*использование созданного компонента Button*/}
        <Button type="submit" title="Add new todo">
          Add
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
