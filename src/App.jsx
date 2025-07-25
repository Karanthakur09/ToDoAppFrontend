import {Route,Routes} from 'react-router-dom'
import LandingPage from './pages/landing/Landing'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import { Toaster } from 'react-hot-toast'
import HomePage from './pages/home/HomePage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage/>}/>
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/todoList" element={<TodoList />} />  */}
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
