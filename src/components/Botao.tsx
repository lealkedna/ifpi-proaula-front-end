interface BotaoProps {
  cor?: 'green' | 'blue' | 'gray'
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Botao(props: BotaoProps) {
  return (
    <button
      onClick={props.onClick}
      className={`
            bg-gradient-to-r from-blue-500 to-blue-700
            text-white px-3 py-1 rounded-md mb-4
            ${props.className}
        `}
    >
      {props.children}
    </button>
  )
}
