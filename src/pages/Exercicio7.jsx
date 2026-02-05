import BotaoVoltar from '../components/BotaoVoltar'
import GerenciadorCredenciais from '../components/GerenciadorCredenciais'
import './Exercicio7.css'

export default function Exercicio7() {
  return (
    <div className="exercicio-container">
      <BotaoVoltar />
      
      <div className="header">
        <h1>Exercício 7: Mini Gerenciador de Credenciais</h1>
        <p>Sistema para gerenciar credenciais de usuários</p>
      </div>

      <GerenciadorCredenciais />
    </div>
  )
}
