import React from 'react'
import Turma from '../core/Turma'
import BotaoEditar from './BotaoEditar'
import BotaoInativar from './BotaoInativar'
import { iconeEditar, IconeInativar } from './Icones'

interface TabelaTurmaProps {
  turmas: Turma[]
  turmaSelecionada?: (turma: Turma) => void
  turmaInativada?: (turma: Turma) => void
}

export default function TabelaTurma(props: TabelaTurmaProps) {
  const exibirAcoes = props.turmaSelecionada || props.turmaInativada

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="p-3">Descrição</th>
        <th className="p-3">Turno</th>
        <th className="p-3">Curso</th>
        <th className="p-3">Período Letivo</th>
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.turmas?.map((turma, i) => {
      return (
        <tr
          key={turma.id}
          className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200'}`}
        >
          <td className="p-3">{turma.descricao}</td>
          <td className="p-3">{turma.turno}</td>
          <td className="p-3">{turma.curso}</td>
          <td className="p-3">{turma.periodoLetivo.descricao}</td>
          {exibirAcoes ? renderizarAcoes(turma) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(turma: Turma) {
    return (
      <td className="p-3">
        {props.turmaSelecionada ? (
          <BotaoEditar onClick={() => props.turmaSelecionada?.(turma)}>
            {iconeEditar}
          </BotaoEditar>
        ) : (
          false
        )}
        {props.turmaInativada ? (
          <BotaoInativar onClick={() => props.turmaInativada?.(turma)}>
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
