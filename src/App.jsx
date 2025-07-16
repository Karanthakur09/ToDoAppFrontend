import {Route,Routes} from 'react-router-dom'
import LandingPage from './pages/landing/Landing'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/todoList" element={<TodoList />} />  */}
      </Routes>
    </div>
  )
}

export default App
