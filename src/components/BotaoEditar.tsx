import React from 'react'

interface BotaoEditarProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function BotaoEditar(props: BotaoEditarProps) {
  return (
    <button
      className="mr-1 p-2 rounded-full hover:bg-white text-green-700"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
