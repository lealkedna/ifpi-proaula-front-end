import React from 'react'

interface EntradasCoordenadorProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: string
  somenteLeitura?: boolean
  className?: string

  // valorMudou?: (valor: string) => void
}

export default function EntradaCoodenador(props: EntradasCoordenadorProps) {
  return (
    <div>
      <label>{props.texto}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        // onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
                    border border-purple-500 rounded-lg
                    bg-white focus:outline-none px-2 py-2
                    text-black
                `}
      />
    </div>
  )
}
