import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from 'pages/HomePage'
// import LoginPage from 'pages/LoginPage'
// import SignUpPage from 'pages/SignUpPage'
import TodoPage from 'pages/TodoPage(dummy)'

function App () {
  return (
    <div className='App'>
      {/* <BrowserRouter>
        <Routes>
          <Route path='front/login' element={<LoginPage />} />
          <Route path='front/signup' element={<SignUpPage />} />
          <Route path='front/todo' element={<TodoPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter> */}
      <TodoPage />
    </div>
  )
}

export default App
