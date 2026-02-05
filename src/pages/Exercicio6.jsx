import BotaoVoltar from '../components/BotaoVoltar'
import MousePositionTracker from '../components/MousePositionTracker'
import './Exercicio6.css'

export default function Exercicio6() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      
      <div className="header">
        <h1>Exercício 6: Rastreador de Mouse em React com Hooks</h1>
        <p>Rastreamento das coordenadas X e Y do mouse</p>
      </div>

      <div className="conteudo-container">
        <h2>Mova o mouse pela tela:</h2>
        <MousePositionTracker />
      </div>
    </div>
  )
}
