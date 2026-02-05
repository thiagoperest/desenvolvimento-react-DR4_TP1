import { useState } from 'react'
import ItemCredencial from './ItemCredencial'
import './GerenciadorCredenciais.css'

export default function GerenciadorCredenciais() {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [credenciais, setCredenciais] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    
    const novaCredencial = {
      id: crypto.randomUUID(),
      usuario: usuario,
      senha: senha
    }
    
    setCredenciais([...credenciais, novaCredencial])
    setUsuario('')
    setSenha('')
  }

  function handleExcluir(id) {
    setCredenciais(credenciais.filter((credencial) => credencial.id !== id))
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

      <div className="lista-credenciais">
        <h3>Credenciais Salvas:</h3>
        <ul>
          {credenciais.map((credencial) => (
            <ItemCredencial
              key={credencial.id}
              id={credencial.id}
              usuario={credencial.usuario}
              senha={credencial.senha}
              onExcluir={handleExcluir}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
