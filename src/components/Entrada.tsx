interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: string
  somenteLeitura?: boolean

  valorMudou?: (valor: string) => void
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2">{props.texto}</label>
      <input
        onChange={(e) => props.valorMudou?.(e.target.value)}
        className={`
                   bg-gray-50 border border-purple-500 rounded-lg
                   focus:outline-none px-2 py-2 
                `}
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
      />
    </div>
  )
}
