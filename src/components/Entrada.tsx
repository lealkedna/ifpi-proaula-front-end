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
           border border-purple-500 rounded-lg
          bg-white focus:outline-none px-2 py-2
          text-black
        `}
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
      />
    </div>
  )
}
