import TodoInput from 'component/TodoInput'
import TodoCollection from 'component/TodoCollection'
import Footer from 'component/Footer'
import { useState, useEffect } from 'react'
import { getTodos, createTodo, patchTodo, deleteTodo } from '../api/todos'

// ------------------------------------------
// const dummyTodos = [
//   {
//     title: '菜鳥練習01',
//     isDone: true,
//     id: 1
//   },
//   {
//     title: '菜鳥練習02',
//     isDone: true,
//     id: 2
//   },
//   {
//     title: '菜鳥練習03',
//     isDone: false,
//     id: 3
//   }
// ]
// ------------------------------------------
const TodoPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleChange = (value) => setInputValue(value)

  const handleAddTodo = async (e) => {
    e.preventDefault()
    if (inputValue.length === 0) {
      return
    }
    try {
      const data = await createTodo({ title: inputValue, isDone: false })
      setTodos((pre) => {
        return [...pre, {
          title: data.title,
          isDone: data.isDone,
          // id: Math.floor(Math.random() * 100000)
          id: data.id
        }]
      })
      setInputValue('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleToggleDone = async (TodoId) => {
    const currentTodo = todos.find((todo) => todo.id === TodoId)
    try {
      await patchTodo({
        id: TodoId,
        isDone: !currentTodo.isDone
      })
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
    } catch (error) {
      console.error(error)
    }
  }

  // 純前端功能
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

  const hadleSave = async ({ id, title }) => {
    try {
      await patchTodo({
        id,
        title
      })
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
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (TodoId) => {
    try {
      await deleteTodo(TodoId)
      setTodos(pre => pre.filter((todo) => todo.id !== TodoId))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos()
        setTodos(todos)
      } catch (error) {
        console.error(error)
      }
    }
    getTodosAsync()
  }, [])

  return (
    <div className='todoPage'>
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
