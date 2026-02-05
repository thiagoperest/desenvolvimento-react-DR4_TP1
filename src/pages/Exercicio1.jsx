import BotaoVoltar from '../components/BotaoVoltar'
import './Exercicio1.css'

function mostrarMensagemReact() {
  console.log('Mensagem React')
}

function mostrarMensagem() {
  console.log('Mensagem HTML')
}

export default function Exercicio1() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      <div className="header">
        <h1>Exercício 1: Implementação de Eventos e Comparação de Sintaxes</h1>
        <p>Comparar eventos com onclick HTML vs React</p>
      </div>

      <div className="exercicio-content">
        {/* Seção HTML/JavaScript */}
        <section className="secao">
          <h2>HTML/JavaScript (onclick embutido)</h2>
          <p className="descricao">
            Usando atributo <code>onclick</code> inline no HTML
          </p>
          <div className="exemplo-container">
            <button
              onClick={mostrarMensagem}
              className="btn btn-html"
            >
              Clique para exibir mensagem HTML
            </button>
          </div>
          <div className="codigo-container">
            <pre><code>{`<button onclick="mostrarMensagem()">
  Clique aqui
</button>

function mostrarMensagem() {
  console.log('Mensagem HTML')
}`}</code></pre>
          </div>
        </section>

        {/* Seção React */}
        <section className="secao">
          <h2>React (onClick com função)</h2>
          <p className="descricao">
            Usando prop <code>onClick</code> com função
          </p>
          <div className="exemplo-container">
            <button
              onClick={mostrarMensagemReact}
              className="btn btn-react"
            >
              Clique para exibir mensagem React
            </button>
          </div>
          <div className="codigo-container">
            <pre><code>{`function mostrarMensagemReact() {
  console.log('Mensagem React')
}

export default function Exercicio1() {
  return (
    <button onClick={mostrarMensagemReact}>
      Clique para exibir mensagem React
    </button>
  )
}`}</code></pre>
          </div>
        </section>
      </div>

      <div className="instrucoes">
        <h3>Instruções:</h3>
        <ol>
          <li>Abra o Console</li>
          <li>Clique em cada botão</li>
          <li>Observe as diferenças nas mensagens exibidas no console</li>
        </ol>
      </div>
    </div>
  )
}
