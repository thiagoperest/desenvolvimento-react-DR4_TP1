import { useState, useEffect } from 'react'
import './MousePositionTracker.css'

export default function MousePositionTracker() {
  const [coordenadas, setCoordenadas] = useState({ clientX: 0, clientY: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      setCoordenadas({ clientX: e.clientX, clientY: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="tracker-container">
      <div className="coordenadas-content">
        <div className="coordenada">
          <span className="label">X:</span>
          <span className="valor">{coordenadas.clientX}</span>
        </div>
        <div className="coordenada">
          <span className="label">Y:</span>
          <span className="valor">{coordenadas.clientY}</span>
        </div>
      </div>
    </div>
  )
}
