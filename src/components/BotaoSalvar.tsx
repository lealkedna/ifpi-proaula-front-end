import React from 'react'

interface BotaoSalvarProps {
  children: React.ReactNode
  className: string
  onClick: () => void
}

export default function BotaoSalvar(props: BotaoSalvarProps) {
  return (
    <button
      className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md px-3 py-2 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
