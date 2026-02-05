import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Exercicio1 from './pages/Exercicio1'
import Exercicio2 from './pages/Exercicio2'
import Exercicio3 from './pages/Exercicio3'
import Exercicio4 from './pages/Exercicio4'
import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercicio-1" element={<Exercicio1 />} />
        <Route path="/exercicio-2" element={<Exercicio2 />} />
        <Route path="/exercicio-3" element={<Exercicio3 />} />
        <Route path="/exercicio-4" element={<Exercicio4 />} />
      </Routes>
    </Router>
  )
}
