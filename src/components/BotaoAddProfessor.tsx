import React from 'react'

interface BotaoAddProfessorProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function BotaoAddProfessor(props: BotaoAddProfessorProps) {
  return (
    <button
      onClick={props.onClick}
      className={`flex bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-1 rounded-md mb-4 ${props.className}`}
    >
      {props.children}
    </button>
  )
}
