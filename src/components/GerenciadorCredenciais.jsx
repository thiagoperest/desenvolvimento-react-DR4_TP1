import { useState } from 'react'
import './GerenciadorCredenciais.css'

export default function GerenciadorCredenciais() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setUsuario('')
    setSenha('')
  }

  return (
    <div className="gerenciador-container">
      <h2>Cadastro de Credenciais</h2>
      
      <form className="form" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Digite o usuário"
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite a senha"
          />
        </div>

        <button type="submit" className="btn-salvar">
          Salvar Credencial
        </button>
      </form>

      <div className="exibicao">
        <h3>Valores Atuais:</h3>
        <p><strong>Usuário:</strong> {usuario || '(vazio)'}</p>
        <p><strong>Senha:</strong> {senha || '(vazio)'}</p>
      </div>
    </div>
  )
}
