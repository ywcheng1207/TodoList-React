import style from './TodoInput.module.scss'

const TodoInput = ({ inputValue, onChange, onAddTodo }) => {
  const { todoInputContainer, todoInput } = style
  return (
    <form className={todoInputContainer} onSubmit={onAddTodo}>
      <input
        className={todoInput}
        type='text'
        value={inputValue}
        placeholder='Type in Something...'
        onChange={(e) => onChange?.(e.target.value)}
      />
    </form>
  )
}

export default TodoInput
