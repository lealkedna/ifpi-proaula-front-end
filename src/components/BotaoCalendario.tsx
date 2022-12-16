import React from "react"

interface BotaoCalendarioProps {
    children: React.ReactNode
    onClick?: () => void
}

export default function BotaoCalendario(props: BotaoCalendarioProps) {
    return (
        <button className="p-2 mr-1 text-blue-700 rounded-full hover:bg-white" onClick={props.onClick}>
            {props.children}
        </button>
    )
}