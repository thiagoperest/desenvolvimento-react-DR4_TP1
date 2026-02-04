import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Exercicio1 from './pages/Exercicio1'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio-1" element={<Exercicio1 />} />
      </Routes>
    </Router>
  )
}
