import style from './TodoInput.module.scss'

const TodoInput = ({ inputValue, onChange, onAddTodo }) => {
  const { todoInput } = style
  return (
    <div>
      <form onSubmit={onAddTodo}>
        <input
          className={todoInput}
          type='text'
          value={inputValue}
          placeholder='Type in Something...'
          onChange={(e) => onChange?.(e.target.value)}
        />
      </form>
    </div>
  )
}

export default TodoInput
