import clsx from 'clsx'
import todoItemStyle from './TodoItems.module.scss'
import { useRef } from 'react'

const TodoItem = ({ todo, onToggleDone, onSave, onDelete, onChangeMode }) => {
  const inputRef = useRef(null)
  const { todoItemContainer, itemLabel, itemText, itemBody, todoItemBtn, done, edit } = todoItemStyle

  const handleKeyDown = (e) => {
    if (inputRef.current.value.length > 0 && e.key === 'Enter') {
      onSave?.({ id: todo.id, title: inputRef.current.value })
    }
    if (e.key === 'Escape') {
      onChangeMode?.({ id: todo.id, isEdit: false })
    }
  }

  return (
    <div className={todoItemContainer}>
      <label
        className={clsx(itemLabel, { [edit]: todo.isEdit })}
        onDoubleClick={() => onChangeMode?.({ id: todo.id, isEdit: true })}
      >
        <span className={clsx(itemText, { [done]: todo.isDone })}>{todo.title}</span>
        <input
          className={itemBody}
          ref={inputRef}
          defaultValue={todo.title}
          onKeyDown={handleKeyDown}
        />
      </label>
      <button className={todoItemBtn} onClick={() => onToggleDone?.(todo.id)}>&#10003;</button>
      <button className={todoItemBtn} onClick={() => onDelete?.(todo.id)}>&#9747;</button>
    </div>
  )
}

export default TodoItem
