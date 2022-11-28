import React from 'react'

interface BotaoCancelarProps {
  children: React.ReactNode
  className: string
  onClick?: () => void
}

export default function BotaoCancelar(props: BotaoCancelarProps) {
  return (
    <button
      className={`bg-gradient-to-r from-red-500 to-red-700 text-white rounded-md px-3 py-1 ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
