import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../UI/Button'

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <div>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear completed Todos" onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
