import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const exercicios = [
    {
      id: 1,
      titulo: 'Implementação de Eventos e Comparação de Sintaxes',
      descricao: 'Comparar eventos com onclick HTML vs React',
      rota: '/exercicio-1'
    }
  ]

  return (
    <div className="home-container">
      <h1>Desenvolvimento Web com React</h1>
      <p className="subtitle">TP1</p>
      
      <div className="exercicios-grid">
        {exercicios.map((exercicio) => (
          <Link to={exercicio.rota} key={exercicio.id} className="exercicio-card">
            <h2>Exercício {exercicio.id}</h2>
            <h3>{exercicio.titulo}</h3>
            <p>{exercicio.descricao}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
