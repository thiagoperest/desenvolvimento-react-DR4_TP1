import BotaoVoltar from '../components/BotaoVoltar'
import './Exercicio3.css'

export default function Exercicio3() {
  
  function handleMudarTema(cor) {
    console.log(`Novo tema selecionado: ${cor}`)
  }

  // Por que usar Arrow Function?
  // Se usarmos onClick={handleMudarTema('Azul')}, a função seria executada
  // IMEDIATAMENTE durante a renderização, não no clique.
  // A Arrow Function (() => handleMudarTema('Azul')) cria uma nova função
  // que só será executada quando o botão for clicado.

  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      
      <div className="header">
        <h1>Exercício 3: Passagem de Argumentos em um Clique</h1>
        <p>Botões que passam argumentos para função manipuladora</p>
      </div>

      <div className="botoes-container">
        <h2>Selecione um tema:</h2>
        <div className="botoes-grupo">
          <button 
            className="btn btn-azul"
            onClick={() => handleMudarTema('Azul')}
          >
            Azul
          </button>
          
          <button 
            className="btn btn-verde"
            onClick={() => handleMudarTema('Verde')}
          >
            Verde
          </button>
          
          <button 
            className="btn btn-vermelho"
            onClick={() => handleMudarTema('Vermelho')}
          >
            Vermelho
          </button>
        </div>
        
        <div className="instrucao">
          <p>Abra o Console e clique nos botões para ver as mensagens</p>
        </div>
      </div>
    </div>
  )
}
