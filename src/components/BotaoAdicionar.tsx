import React from 'react'

interface BotaoAdicionarProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function BotaoAdicionar(props: BotaoAdicionarProps) {
  return (
    <button className="mb-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-md px-3 py-2" onClick={props.onClick}>
      {props.children}
    </button>
  )
}
