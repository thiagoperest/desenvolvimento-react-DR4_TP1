import { useState } from 'react'

export default function ItemCredencial({ id, usuario, senha, onExcluir }) {
  const [senhaVisivel, setSenhaVisivel] = useState(false)

  return (
    <li>
      <div className="info-credencial">
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Usuário:</strong> {usuario}</p>
        <p><strong>Senha:</strong> {senhaVisivel ? senha : '********'}</p>
      </div>
      <div className="botoes-credenciais-container">
        <button 
          className="btn-excluir"
          onClick={() => onExcluir(id)}
        >
          Excluir
        </button>
        <button
          className="btn-toggle-senha"
          onClick={() => setSenhaVisivel(!senhaVisivel)}
        >
          {senhaVisivel ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
    </li>
  )
}
