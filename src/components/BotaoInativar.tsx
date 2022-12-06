import React from 'react'

interface BotaoInativarProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function BotaoInativar(props: BotaoInativarProps) {
  return (
    <button
      className="ml-1 p-2 rounded-full hover:bg-white text-red-600"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
