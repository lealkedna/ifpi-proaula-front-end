import React from "react"

interface BotaoVoltarProps {
    children: React.ReactNode
    onClick?: () => void
}

export default function BotaoVoltar(props: BotaoVoltarProps) {
    return (
        <button className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-md px-3 py-2" onClick={props.onClick}>
            {props.children}
        </button>
    )
}
