import React from 'react'

interface EntradasTurmasProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: string
  somenteLeitura?: boolean
  className?: string

  valorMudou?: (valor: string) => void
}

export default function EntradasTurmas(props: EntradasTurmasProps) {
  return (
    <div
      className={`
            flex flex-col ${props.className}
        `}
    >
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
                    border border-purple-500 rounded-lg
                    bg-white focus:outline-none px-2 py-2 
                `}
      />
    </div>
  )
}
