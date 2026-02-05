import { useState } from 'react'
import BotaoVoltar from '../components/BotaoVoltar'
import './Exercicio5.css'

export default function Exercicio5() {
  const [textoDigitado, setTextoDigitado] = useState('')
  const [textoConfirmado, setTextoConfirmado] = useState('')

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setTextoConfirmado(textoDigitado)
    }
  }

  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      
      <div className="header">
        <h1>Exercício 5: Evento de Teclado e Captura Condicional</h1>
        <p>Input com confirmação ao pressionar Enter</p>
      </div>

      <div className="form-container">
        <h2>Digite algo e pressione Enter:</h2>
        
        <div className="input-container">
          <input 
            type="text"
            value={textoDigitado}
            onChange={(e) => setTextoDigitado(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite seu texto aqui..."
            className="input-texto"
          />
        </div>
        
        <div className="resultado-container">
          <h3>Texto Confirmado:</h3>
          <p className="texto-confirmado">
            {textoConfirmado || "(Nenhum texto confirmado!)"}
          </p>
        </div>

        <div className="instrucao">
          <p>
            <strong>Instruções:</strong> Digite algo no campo acima e pressione a tecla <kbd>Enter</kbd> para confirmar o texto.
          </p>
        </div>
      </div>
    </div>
  )
}
