interface EntradaProfessorProps {
  texto: string
  tipo?: "text"
  valor: any
  valorMudou?: (valor: any) => void
}

export default function EntradaProfessor(props: EntradaProfessorProps) {
  return (
    <div className="flex flex-col">
      <label className="mt-3 mb-2">{props.texto}</label>
      <input
        className="border border-purple-500 rounded-lg bg-white focus:outline-none p-1 text-black"
        type={props.tipo}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}
