import { useState } from 'react'
import BotaoVoltar from '../components/BotaoVoltar'
import './Exercicio4.css'

export default function Exercicio4() {
  const [visivel, setVisivel] = useState(false)

  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      
      <div className="header">
        <h1>Exercício 4: Gerenciamento de Múltiplos Status com Condição</h1>
        <p>Input com toggle de visibilidade (password/text)</p>
      </div>

      <div className="form-container">
        <h2>Digite sua senha:</h2>
        
        <div className="input-grupo">
          <input 
            type={visivel ? "text" : "password"}
            placeholder="Digite sua senha..."
            className="input-senha"
          />
          
          <button 
            className="btn-toggle"
            onClick={() => setVisivel(!visivel)}
          >
            {visivel ? "Ocultar" : "Mostrar"}
          </button>
        </div>
        
        <div className="status-container">
          <p>Status atual: <strong>{visivel ? "Visível (text)" : "Oculto (password)"}</strong></p>
        </div>
      </div>
    </div>
  )
}
