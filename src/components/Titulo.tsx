interface TituloProps {
  children: React.ReactNode
}

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h1 className="pl-7 py-2 text-2xl">{props.children}</h1>
      <hr className="border-2 border-purple-600" />
    </div>
  )
}
