import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const exercicios = [
    {
      id: 1,
      titulo: 'Implementação de Eventos e Comparação de Sintaxes',
      descricao: 'Comparar eventos com onclick HTML vs React',
      rota: '/exercicio-1'
    },
    {
      id: 2,
      titulo: 'Formulário Controlado e Mudança de Estado',
      descricao: 'Textarea controlado com contador de caracteres',
      rota: '/exercicio-2'
    },
    {
      id: 3,
      titulo: 'Passagem de Argumentos em um Clique',
      descricao: 'Botões que passam argumentos para função manipuladora',
      rota: '/exercicio-3'
    },
    {
      id: 4,
      titulo: 'Gerenciamento de Múltiplos Status com Condição',
      descricao: 'Input com toggle de visibilidade (password/text)',
      rota: '/exercicio-4'
    },
    {
      id: 5,
      titulo: 'Evento de Teclado e Captura Condicional',
      descricao: 'Input com confirmação ao pressionar Enter',
      rota: '/exercicio-5'
    },
    {
      id: 6,
      titulo: 'Rastreador de Mouse em React com Hooks',
      descricao: 'Rastreamento das coordenadas X e Y do mouse',
      rota: '/exercicio-6'
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
