import { useState } from 'react'
import BotaoVoltar from '../components/BotaoVoltar'
import './Exercicio2.css'

export default function Exercicio2() {
  const [biografia, setBiografia] = useState('')
  const [contador, setContador] = useState(0)

  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      
      <div className="header">
        <h1>Exercício 2: Formulário Controlado e Mudança de Estado</h1>
        <p>Textarea controlado com contador de caracteres</p>
      </div>

      <div className="form-container">
        <label htmlFor="biografia">Biografia:</label>
        <textarea
          id="biografia"
          value={biografia}
          onChange={(e) => {
            setBiografia(e.target.value)
            setContador(e.target.value.length)
          }}
          placeholder="Digite sua biografia aqui..."
          rows="10"
        />
        <div className="contador-container">
          <span>Caracteres digitados: </span>
          <strong>{contador}</strong>
        </div>
      </div>
    </div>
  )
}
