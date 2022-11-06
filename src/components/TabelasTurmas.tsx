import React from 'react'
import TodasTurmas from '../core/TodasTurmas'

import { DeleteIcon, EditIcon } from './Icones'

interface TabelaTurmasProps {
  tabelaTurmas: TodasTurmas[]
  turmaSelecionada?: (turma: TodasTurmas) => void
  turmaExcluida?: (turma: TodasTurmas) => void
}

export default function TabelaTurmas(props: TabelaTurmasProps) {
  const exibirAcoesTurmas = props.turmaSelecionada || props.turmaExcluida

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-center p-2">Nome</th>
        <th className="text-center p-2">Turno</th>
        <th className="text-center p-2">Curso</th>
        <th className="text-center p-2">Periodo Letivo</th>
        {exibirAcoesTurmas ? <th className="text-center p-2">ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.tabelaTurmas?.map((tabelaturmas, i) => {
      return (
        <tr
          key={tabelaturmas.id}
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className="text-center p-2">{tabelaturmas.nome}</td>
          <td className="text-center p-2">{tabelaturmas.turno}</td>
          <td className="text-center p-2">{tabelaturmas.curso}</td>
          <td className="text-center p-2">{tabelaturmas.periodoletivo}</td>
          {exibirAcoesTurmas ? renderizarAcoes(tabelaturmas) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(turmas: TodasTurmas) {
    return (
      <td className="text-center">
        {props.turmaSelecionada ? (
          <button
            onClick={() => props.turmaSelecionada?.(turmas)}
            className={`
              justify-center items-center mr-3
              text-green-700 rounded-full p-2
              hover:bg-purple-300
          `}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}
        {props.turmaExcluida ? (
          <button
            onClick={() => props.turmaExcluida?.(turmas)}
            className={`
              justify-center items-center mr-3
              text-red-700 rounded-full p-2
              hover:bg-purple-300
          `}
          >
            {DeleteIcon}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
          bg-gradient-to-r from-purple-400 to-purple-700
          text-gray-100
      `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
