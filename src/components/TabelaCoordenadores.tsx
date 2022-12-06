import React from 'react'
import Todos_Coordenadores from '../core/Todos_Coordenadores'
import BotaoEditar from './BotaoEditar'
import BotaoInativar from './BotaoInativar'
import { iconeEditar, IconeInativar } from './Icones'

interface TabelaCoordenadoresProps {
  coordenador: Todos_Coordenadores[]
  coordenadorSelecionado?: (coordenador: Todos_Coordenadores) => void
  coordenadorInativado?: (coordenador: Todos_Coordenadores) => void
}

export default function TabelaCoordenadores(props: TabelaCoordenadoresProps) {
  const exibirAcoes = props.coordenadorSelecionado || props.coordenadorInativado

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-3">Eixo</th>
        <th className="p-3">Modalidade</th>
        <th className="p-3">Professor</th>
        <th className="p-3">Aprovar Solicitação</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.coordenador?.map((coordenador, i) => {
      return (
        <tr
          key={coordenador.id}
          className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}
        >
          <td className="p-3">{coordenador.eixo}</td>
          <td className="p-3">{coordenador.modalidade}</td>
          <td className="p-3">{coordenador.professor}</td>
          <td className="p-3">{coordenador.aprovaSolicitacao}</td>
          {exibirAcoes ? renderizarAcoes(coordenador) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(coordenador: Todos_Coordenadores) {
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
      <thead className="bg-purple-700 text-gray-200">
        {renderizarCabecalho()}
      </thead>

      <tbody className="text-gray-800">{renderizarDados()}</tbody>
    </table>
  )
}
