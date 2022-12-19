import React from 'react'
import Coordenador from '../core/Coordenador'
import BotaoEditar from './BotaoEditar'
import BotaoInativar from './BotaoInativar'
import { iconeEditar, IconeInativar } from './Icones'

interface TabelaCoordenadorProps {
  coordenadores: Coordenador[]
  coordenadorSelecionado?: (coordenador: Coordenador) => void
  coordenadorInativado?: (coordenador: Coordenador) => void
}

export default function TabelaCoordenador(props: TabelaCoordenadorProps) {
  const exibirAcoes = props.coordenadorSelecionado || props.coordenadorInativado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-3">Eixo</th>
        <th className="p-3">Modalidade</th>
        <th className="p-3">Professor</th>
        <th className="p-3">Aprova Solicitação</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.coordenadores?.map((coordenador, i) => {
      return (
        <tr
          key={coordenador.id}
          className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}
        >
          <td className="p-3">{coordenador.eixo}</td>
          <td className="p-3">{coordenador.modalidade}</td>
          <td className="p-3">{coordenador.professor.nome}</td>
          <td className="p-3">{coordenador.aprovaSolicitacao}</td>
          {exibirAcoes ? renderizarAcoes(coordenador) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(coordenador: Coordenador) {
    return (
      <td className="p-3">
        {props.coordenadorSelecionado ? (
          <BotaoEditar
            onClick={() => props.coordenadorSelecionado?.(coordenador)}
          >
            {iconeEditar}
          </BotaoEditar>
        ) : (
          false
        )}
        {props.coordenadorInativado ? (
          <BotaoInativar
            onClick={() => props.coordenadorInativado?.(coordenador)}
          >
            {IconeInativar}
          </BotaoInativar>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden text-center">
      <thead
        className={`
                text-gray-200 bg-purple-700
            `}
      >
        {renderizarCabecalho()}
      </thead>

      <tbody className="text-gray-800">{renderizarDados()}</tbody>
    </table>
  )
}
