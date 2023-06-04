import TodoInput from 'component/TodoInput'
import TodoCollection from 'component/TodoCollection'
import Footer from 'component/Footer'
import { useState } from 'react'

// ------------------------------------------
const dummyTodos = [
  {
    title: '練習01',
    isDone: true,
    id: 1
  },
  {
    title: '練習02',
    isDone: true,
    id: 2
  },
  {
    title: '練習03',
    isDone: false,
    id: 3
  },
  {
    title: '練習04',
    isDone: false,
    id: 4
  },
  {
    title: '練習05',
    isDone: false,
    id: 5
  },
  {
    title: '練習06',
    isDone: false,
    id: 6
  }
]
// ------------------------------------------
const TodoPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos)

  const handleChange = (value) => setInputValue(value)

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (inputValue.length === 0) {
      return
    }

    setTodos((pre) => {
      return [
        ...pre,
        {
          title: inputValue,
          isDone: false,
          id: Math.floor(Math.random() * 100000)
        }
      ]
    })
    setInputValue('')
  }

  const handleToggleDone = (TodoId) => {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === TodoId) {
          return {
            ...todo,
            isDone: !todo.isDone
          }
        }
        return todo
      })
    })
  }

  const handleChangeMode = ({ id, isEdit }) => {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit
          }
        }
        return { ...todo, isEdit: false }
      })
    })
  }

  const hadleSave = ({ id, title }) => {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
            isEdit: false
          }
        }
        return todo
      })
    })
  }

  const handleDelete = (TodoId) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== TodoId))
  }

  return (
    <div className="todoPage">
      <TodoInput
        inputValue={inputValue}
        onChange={handleChange}
        onAddTodo={handleAddTodo}
      />
      <TodoCollection
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleChangeMode}
        onSave={hadleSave}
        onDelete={handleDelete}
      />
      <Footer />
    </div>
  )
}

export default TodoPage
