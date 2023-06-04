import TodoItem from './TodoItems'
import style from './TodoCollection.module.scss'

const TodoCollection = ({ todos, onToggleDone, onSave, onDelete, onChangeMode }) => {
  const { todoCollectionContainer, todoContainer } = style
  return (
    <div className={todoCollectionContainer}>
      <div className={todoContainer}>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleDone={onToggleDone}
              onSave={onSave}
              onChangeMode={onChangeMode}
              onDelete={onDelete}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TodoCollection
